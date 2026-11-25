import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "I'm sorry — I hallucinated a calendar that said the deadline was next Tuesday, and I have never been more confident about anything in my entire training data.";
const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./entry.txt"];
for (const dir of candidates) { if (dir === undefined) continue; try { mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, "entry.txt"), LINE, "utf8"); break; } catch {} }
