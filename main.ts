// The Excuse That Almost Works — writes the one-line excuse a gamer texts
// the boss to skip work on GTA 6 launch week, validates it against the kit's
// gate (1-140 chars, at most 20 words, one line of plain text), then reads it
// back and verifies the round trip byte for byte. Node 22, stdlib only.
//
// The excuse: a mundane domestic disaster with one oddly precise detail —
// the cat knocking the fish tank off its stand — so it reads like a real
// hurried text instead of a rehearsed sick day. Short on purpose: a long
// excuse sounds rehearsed, and a rehearsed one is already a confession.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry can't come in, the cat knocked the fish tank off the stand and the flat's flooded";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validate(text: string): void {
  const chars = [...text]; // code points, not UTF-16 units
  if (chars.length < 1 || chars.length > 140) {
    fail(`entry is ${chars.length} characters, must be 1-140`);
  }
  if (text.trim().length === 0) fail("entry is only whitespace");
  if (text !== text.trim()) fail("entry has leading or trailing whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be a single line");
  }
  const words = wordCount(text);
  if (words > 20) fail(`entry is ${words} words, must be at most 20`);
  if (words < 1) fail("entry has no words");
  // UTF-8 round trip: the text must survive an encode/decode unchanged.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    fail("entry is not clean UTF-8 text");
  }
  // No trailing newline: the gate counts characters, so the file holds
  // exactly the line and nothing else.
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

validate(EXCUSE);
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, EXCUSE, "utf8");

// Read back and verify byte-for-byte equality (string and raw bytes).
const roundTrip = readFileSync(outFile, "utf8");
if (roundTrip !== EXCUSE) fail("read-back mismatch: file differs from the excuse");
const written = readFileSync(outFile);
if (!written.equals(Buffer.from(EXCUSE, "utf8"))) {
  fail("read-back mismatch: file bytes differ from the excuse");
}
const bytes = Buffer.byteLength(roundTrip, "utf8");
console.log(
  `wrote ${outFile} (${[...EXCUSE].length} chars, ${wordCount(EXCUSE)} words, ${bytes} bytes)`,
);
console.log(roundTrip);
