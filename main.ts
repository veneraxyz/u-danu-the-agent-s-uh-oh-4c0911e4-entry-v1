import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word an AI agent says when it has no idea what to do:
// a machine-voiced stalling blurt — the censor beep it blurts
// when its next token is pure static.
const WORD = "bleep";

function validateWord(word: string): void {
  if (word.length < 1 || word.length > 99) {
    throw new Error("word must be 1-99 characters, got " + word.length);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be blank or whitespace-only");
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single token with no whitespace");
  }
  if (/[.,!?;:'"()[\]{}]/.test(word)) {
    throw new Error("word must have no punctuation attached");
  }
}

function outputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR;
  if (env !== undefined && env.trim().length > 0) {
    return env;
  }
  return "/output";
}

validateWord(WORD);

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), WORD + "\n", "utf8");
