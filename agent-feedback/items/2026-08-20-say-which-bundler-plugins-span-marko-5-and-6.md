---
type: bug
impact: med
effort: low
site: skills/marko-5-to-6-migration/SKILL.md › Step 2 — Modernize the foundation
---

# Say which bundler plugins actually span Marko 5 and 6

Step 2.6 tells a migration that "`@marko/vite`, `@marko/webpack`, `@marko/rollup`, and `@marko/run` all support Marko 5 _and_ 6", which is the sentence that decides whether a project keeps its build tool. Two of those are wrong at the versions on npm: `@marko/webpack@10.0.1` still peer-declares `marko: ^5.7.0`, and `@marko/build@4.3.2` — the marko-cli build that wraps it, and what a `marko-build`/`marko-serve` app actually depends on — carries `marko: ^5.37.10` as a regular dependency, so it installs its own Marko 5 next to the 6 the app asked for. `@marko/vite` and `@marko/rollup` peer only `@marko/compiler ^5` and are genuinely major-agnostic. Name the ones that span both, and say that a `@marko/build`/`@marko/serve` app has to replace its build tool before Flow A can finish rather than after.

Check: `npm view @marko/webpack@latest peerDependencies` prints `{"marko":"^5.7.0","webpack":"^4 || ^5"}` and `npm view @marko/build@latest dependencies.marko` prints `^5.37.10`, while Step 2.6 lists both as supporting Marko 6. Expect the step to list only the plugins whose published ranges admit 6.
