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
): Promise<string> {
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
  // Debug ids, dynamic style names and error locations name the fixture's own
  // files by path, which would tie every snapshot to where the fixture lives.
  const location = path.relative(CWD, dir) + path.sep;
  actual = actual
    .replaceAll(location, "__tests__/")
    .replaceAll(toStyleName(location), toStyleName("__tests__/"));

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
        `Snapshot conflict: "${file}" was written with different content by two tests; a shared snapshot must not depend on the mode or output.`,
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
        (uniqueName ?? file.slice(0, -ext.length)) +
        ".actual" +
        ext;
      fs.mkdirSync(path.dirname(actualFile), { recursive: true });
      fs.writeFileSync(actualFile, actual);
    }
    assert.strictEqual(actual, expected);
  }
  return actual;
}

if (UPDATE) {
  after(function cleanupSnapshots() {
    // Pruning is only sound after a complete, green run: a `--grep`-scoped or
    // bailed update never wrote the snapshots the unrun tests own.
    if (!allTestsPassed(this.test!.parent!)) return;
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

// Mirrors the translator's encoding of a template id into a style name.
function toStyleName(id: string) {
  return id.replace(
    /[^a-zA-Z0-9_]/g,
    (c) => "-" + c.charCodeAt(0).toString(36),
  );
}

export function allTestsPassed(suite: Mocha.Suite): boolean {
  return (
    suite.tests.every((test) => test.state === "passed") &&
    suite.suites.every(allTestsPassed)
  );
}
