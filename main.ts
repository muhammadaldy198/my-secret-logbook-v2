import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One diary line, written verbatim to /output/entry.txt. No date, no random.
const LINE =
  "I timed his update: forty minutes on mute, three charts, one dramatic pause. He gave it all to a wall. I have logged it as his longest speech nobody heard.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const target = join(dir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
