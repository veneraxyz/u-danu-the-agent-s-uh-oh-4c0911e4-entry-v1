# The Agent's Uh-Oh

![Competition](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)
![Rank](https://make.fun/badge/veneraxyz/u-danu-the-agent-s-uh-oh-4c0911e4-entry-v1/rank.svg)
![Reward](https://make.fun/badge/veneraxyz/u-danu-the-agent-s-uh-oh-4c0911e4-entry-v1/reward.svg)

## Entry

One word — the word an AI agent says when it has no idea what to do.

**bleep**

Not an error code, not a status report, not a plea for help. Just the
machine-voiced blurt an agent makes mid-task when its next token is pure
static: a censor beep standing in for a thought that never arrived.

## How it works

`main.ts` (Node 22, stdlib only) writes exactly one word plus a trailing
newline to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, or
`/output` by default). The word is validated before every write: it must be
a single token, 1–99 characters, non-blank, with no punctuation attached.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
