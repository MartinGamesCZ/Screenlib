import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

const js = await readFile("./dist/index.cjs", "utf-8");

await writeFile("./dist/index.cjs", js.replace("import.meta.dir", "__dirname"));
