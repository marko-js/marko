import fs from "fs";
import path from "path";
import assert from "assert";

export default function snapshot(
  dir: string,
  file: string,
  data: unknown,
  originalError?: Error
) {
  const parsed = path.parse(file);
  const ext = parsed.ext;
  let name = parsed.name;

  if (name) {
    name += ".";
  }

  try {
    fs.accessSync(dir);
  } catch {
    fs.mkdirSync(dir);
  }

  const expectedFile = path.join(dir, `${name}expected${ext}`);
  const actualFile = path.join(dir, `${name}actual${ext}`);

  fs.writeFileSync(actualFile, data, "utf-8");

  if (process.env.UPDATE_SNAPSHOTS) {
    fs.writeFileSync(expectedFile, data, "utf-8");
  } else {
    const expected = fs.existsSync(expectedFile)
      ? fs.readFileSync(expectedFile, "utf-8")
      : "";

    try {
      assert.equal(data, expected);
    } catch (err) {
      err.snapshot = true;
      err.name = err.name.replace(" [ERR_ASSERTION]", "");
      err.stack = "";
      err.message = path.relative(process.cwd(), actualFile);

      throw originalError || err;
    }
  }
}
