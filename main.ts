// Meme Sprint 3: AI Agent Goes Rogue — make.fun entry.
// Copies the meme image to /output/entry.png.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);

// Gate guard: the image must be non-empty and at most 1 MiB.
const size = statSync(dest).size;
if (size === 0 || size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, must be 1-1048576`);
}
