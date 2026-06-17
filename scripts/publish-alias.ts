import cp from "child_process";
import fs from "fs";
import path from "path";

publishAsMarko("runtime-tags");
publishAsMarko("runtime-class", "m5");

function publishAsMarko(name: string, tag = "latest") {
  const dir = path.join("packages", name);
  const pkgFile = path.resolve(dir, "package.json");
  const originalPkgSource = fs.readFileSync(pkgFile, "utf-8");
  const pkg = JSON.parse(originalPkgSource);

  if (isPublished("marko", pkg.version)) return;

  Object.assign(pkg, { name: "marko", private: false });

  try {
    fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2) + "\n");
    cp.execSync(`npm publish ${dir} --tag ${tag}`, { stdio: "inherit" });
  } finally {
    fs.writeFileSync(pkgFile, originalPkgSource);
  }
}

function isPublished(name: string, version: string) {
  try {
    cp.execSync(`npm view ${name}@${version} version`, {
      stdio: ["ignore", "ignore", "pipe"],
    });
    return true;
  } catch (err) {
    if (`${(err as { stderr?: string }).stderr}`.includes("E404")) return false;
    throw err;
  }
}
