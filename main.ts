import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
// The joke flips "lost" from lost on the road to lost in a conversation:
// a dad carrying a map for a problem no map can solve.
const line = "I asked my dad why he always carries a map. He said, 'In case I get lost in the conversation.'";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log("Wrote entry.txt");
