# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## `render` suite: `escape-script-case` fixture leaks `window.foo` into the shared jsdom browser

`packages/runtime-class/test/render/fixtures/escape-script-case/template.marko:2` | 2026-07-11 | impact:low | effort:low

The `render` suite renders every vdom fixture into one module-level jsdom
browser, and this fixture's inline `<script>var foo = ...</script>` executes
there, defining `window.foo` for every later fixture. Three `syntax-*`
fixtures silently depended on that leak (fixed to read `window.foo`
defensively when `scripts/test-parallel` began slicing the suite across
workers); any future fixture referencing a bare `foo` in an executed script
would repeat the trap, and only off the happy path (`--grep`, slicing). Either
rename the variable to something obviously fixture-scoped, drop the executed
script in favor of a non-executing `type="text/template"`, or reset leaked
globals between fixtures in `create-marko-jsdom-module`.
