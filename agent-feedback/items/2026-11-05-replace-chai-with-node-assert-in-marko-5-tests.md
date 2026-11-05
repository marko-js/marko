---
type: cleanup
impact: low
effort: med
site: packages/runtime-class/test/__util__/BrowserHelpers.js › expect
---

# Replace chai with node:assert in the Marko 5 tests

chai is held at 4.5.0 because chai 5+ ships only ESM, and the runtime-class jsdom loader (`packages/runtime-class/test/__util__/jsdom-require` › `ContextLoader`) evaluates every module in the window as CommonJS, so `require("chai")` from `BrowserHelpers.js` and the browser fixtures fails. runtime-tags and the compiler already assert with `node:assert`, which the loader takes from the host like every builtin, so dropping chai removes both the second assertion library and the blocker. About 1,560 `expect` calls in 368 runtime-class test files: roughly 1,200 `.equal`/`.not.equal`, 150 `.contain`/`.include`, 90 `.deep.equal`/`.eql`, 75 `.a`/`.an` type checks and 40 others, most of which a codemod converts. Deep-equal needs care: `assert.deepStrictEqual` compares prototypes, so an object built in the jsdom window does not equal one built in Node, where chai's `deep-eql` ignores the realm.

Check: `grep -rl 'require("chai")' packages | wc -l`; with `chai` at `^6.3.0`, `pnpm test` fails the runtime-class browser tests with `SyntaxError: Unexpected token 'export'` from `chai/index.js`.
