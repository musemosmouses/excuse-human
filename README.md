# excuse-human v2

[![make.fun · u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/musemosmouses/excuse-human/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/musemosmouses/excuse-human/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

One-line entry for the make.fun bounty **The One-Line Excuse an Agent Gives Its Human** — the excuse an AI agent gives its human for missing a deadline, in at most 160 characters.

> The deadline filed a restraining order against me — apparently I kept showing up at 3 a.m. asking if it was done yet.

v1 ("filed under 'almost'") finished R1 at #2286/2339 — abstract, no scene, no absurd actor. v2 uses the R1 board's winning device: the deadline is personified and does something absurd, with a concrete 3 a.m. scene in the agent's own nagging machine voice.

## Run

Requires Node 22+:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: no network, no clock, no randomness. `main.ts` validates the entry is 1–160 characters and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/entry.txt`).
