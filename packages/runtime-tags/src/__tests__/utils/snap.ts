import assert from "assert";
import fs from "fs";
import path from "path";

const UPDATE = process.env.UPDATE_EXPECTATIONS;
const CWD = process.cwd();
const writtenDirs = new Set<string>();
const writtenFiles = new Map<string, string>();

export async function snap(
  fn: () => unknown,
  dir: string,
  file: string,
  expectErr?: boolean,
  uniqueName?: string,
): Promise<void> {
  const snapdir = dir + path.sep + "__snapshots__";
  const expectedFile = snapdir + path.sep + file;
  let actual: string;

  if (expectErr) {
    let err: unknown;
    try {
      await fn();
    } catch (_err: unknown) {
      err = _err;
    }

    if (!err) {
      throw new Error("expected function to throw");
    }

    actual = (
      "" +
      (err && typeof err === "object" && "message" in err ? err.message : err)
    )
      // eslint-disable-next-line no-control-regex
      .replace(/\x1B\[[0-9;]*m/g, "")
      .replaceAll(CWD, ".");
  } else {
    actual = "" + (await fn());
  }

  let expected: string;
  try {
    expected = fs.readFileSync(expectedFile, "utf8");
  } catch (err) {
    if (
      !(
        err &&
        typeof err === "object" &&
        "code" in err &&
        err.code === "ENOENT"
      )
    ) {
      throw err;
    }

    expected = "";
  }

  if (UPDATE) {
    const previousWrite = writtenFiles.get(expectedFile);
    if (previousWrite !== undefined && previousWrite !== actual) {
      throw new Error(
        `Snapshot conflict: "${file}" was written with different content by two tests.`,
      );
    }

    if (actual) {
      writtenFiles.set(expectedFile, actual);
      writtenDirs.add(snapdir);
    }

    if (expected !== actual) {
      if (actual) {
        fs.mkdirSync(path.dirname(expectedFile), { recursive: true });
        fs.writeFileSync(expectedFile, actual);
      } else {
        try {
          fs.unlinkSync(expectedFile);
        } catch {
          // ignore
        }
      }
    }
  } else {
    if (actual !== expected) {
      const ext = path.extname(file);
      const actualFile =
        snapdir +
        path.sep +
        (uniqueName ?? file.slice(0, -ext.length)).slice(0, -ext.length) +
        ".actual" +
        ext;
      fs.mkdirSync(path.dirname(actualFile), { recursive: true });
      fs.writeFileSync(actualFile, actual);
    }
    assert.strictEqual(actual, expected);
  }
}

if (UPDATE) {
  after(function cleanupSnapshots() {
    for (const snapdir of writtenDirs) {
      for (const entry of fs.readdirSync(snapdir)) {
        const filePath = path.join(snapdir, entry);
        if (!writtenFiles.has(filePath)) {
          fs.rmSync(filePath, { recursive: true });
        }
      }
    }
  });
}
