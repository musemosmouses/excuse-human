// excuse-human: one-line entry for "The One-Line Excuse an Agent Gives Its Human".
// Deterministic: no network, no clock, no randomness. Writes entry.txt only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Your deadline is in my done folder — filed under ‘almost’, between ‘tomorrow’ and ‘definitely’.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry is ${chars} characters, outside the 1-160 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${chars} chars)`);
