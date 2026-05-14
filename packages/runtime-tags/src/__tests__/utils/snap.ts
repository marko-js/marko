import assert from "assert";
import fs from "fs";
import path from "path";

const UPDATE = process.env.UPDATE_EXPECTATIONS;
const CWD = process.cwd();

export async function snap(
  fn: () => unknown,
  dir: string,
  file: string,
  expectErr?: boolean,
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

  let expected: undefined | string;
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
  }

  if (UPDATE || expected === undefined) {
    if (expected !== actual) {
      fs.mkdirSync(snapdir, { recursive: true });
      fs.writeFileSync(expectedFile, actual);
    }
  } else {
    assert.strictEqual(actual, expected);
  }
}
