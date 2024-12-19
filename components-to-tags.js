const { readdir, rename, readFile, writeFile, mkdir } = require("fs/promises");
const path = require("path");

async function processDirectory(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const content = await readFile(fullPath, "utf8");
        if (content.includes("/components/")) {
          const newContent = content.replace(/\/components\//g, "/tags/");
          console.log(`Updating file contents: ${fullPath}`);
          await writeFile(fullPath, newContent);
        }

        if (fullPath.includes("/components/")) {
          const newPath = fullPath.replace(/\/components\//g, "/tags/");
          console.log(`Moving file: ${fullPath} -> ${newPath}`);
          await mkdir(path.dirname(newPath), { recursive: true });
          await rename(fullPath, newPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error);
    throw error;
  }
}

processDirectory(
  path.join(process.cwd(), "packages/runtime-tags/src/__tests__/fixtures"),
);
