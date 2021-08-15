import fs from "fs";
import path from "path";

const scriptsDir = path.join(process.cwd(), "scripts");

export function getAllScriptPaths() {
  const scriptDirs = fs.readdirSync(scriptsDir);
  const paths = scriptDirs.map((dir) => ({
    params: {
      script: dir,
    },
  }));
  return paths;
}

export function getScriptData(slug) {
  const files = fs.readdirSync(path.join(scriptsDir, `${slug}`), "utf8");
  const slugPath = path.join(scriptsDir, slug);
  const ret = files.map((file) => ({
    name: path.basename(
      path.join(slugPath, file),
      path.extname(path.join(slugPath, file))
    ),
    type: path.extname(path.join(slugPath, file)).replace(".", ""),
    data: fs.readFileSync(path.join(slugPath, file), "utf8"),
  }));
  return ret;
}
