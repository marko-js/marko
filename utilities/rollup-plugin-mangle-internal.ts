import type { Plugin, SourceMapInput } from "rollup";
import MagicString from "magic-string";
const internalReg = /(?<=\b)___[a-z0-9$_]+(?=\b)/gi;

export default (): Plugin => {
  const ids = new Map();
  return {
    name: "mangle-internal",
    renderChunk(code, chunk, outputOptions) {
      let m = internalReg.exec(code);

      if (!m) {
        return;
      }

      const s = new MagicString(code);

      do {
        const [v] = m;
        let id = ids.get(v);

        if (!id) {
          let index = ids.size;
          let mod = index % 34;
          id = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_"[mod]; // Avoids chars that could evaluate to a reserved word.
          index = (index - mod) / 34;

          while (index > 0) {
            mod = index % 64;
            id +=
              "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_"[
                mod
              ];
            index = (index - mod) / 64;
          }

          ids.set(v, id);
        }

        s.overwrite(m.index, m.index + v.length, id);
        m = internalReg.exec(code);
      } while (m);

      const result: { code: string; map?: SourceMapInput } = {
        code: s.toString()
      };

      if (outputOptions.sourcemap !== false) {
        result.map = s.generateMap({ hires: true });
      }

      return result;
    }
  };
};
