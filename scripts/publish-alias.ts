import cp from "child_process";
import fs from "fs";
import path from "path";

const relativeRuntimeTagsDir = "packages/runtime-tags";
const runtimeTagsDir = path.resolve(relativeRuntimeTagsDir);
const runtimeTagsPkgFile = path.join(runtimeTagsDir, "package.json");
const originalPkgSource = fs.readFileSync(runtimeTagsPkgFile, "utf-8");
const pkg = JSON.parse(originalPkgSource);

pkg.name = "marko";

try {
  fs.writeFileSync(runtimeTagsPkgFile, JSON.stringify(pkg, null, 2) + "\n");
  cp.execSync(
    `node scripts/pkg-override && npm publish --tag next ./${relativeRuntimeTagsDir} && node scripts/pkg-override`,
  );
} finally {
  fs.writeFileSync(runtimeTagsPkgFile, originalPkgSource);
}
