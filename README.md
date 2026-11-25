[![make.fun · u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/oy-builds/gta6-excuse-01/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/oy-builds/gta6-excuse-01/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

# The Excuse That Almost Works

The single line a gamer texts the boss to get out of work during GTA 6 launch week — a mundane domestic disaster with one oddly precise detail, written the way a real person types in a hurry.

> Sorry can't come in, the cat knocked the fish tank off the stand and the flat's flooded

`main.ts` (Node 22, standard library only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validates it against the kit's gate — one line, 1–140 characters, at most 20 words — then reads it back and verifies it byte for byte.

Run it with:

```sh
node main.ts
```
