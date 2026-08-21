---
type: dx
impact: med
effort: low
site: packages/runtime-class/docs/getting-started.md › Setup
---

# Say in `marko@5`'s shipped docs that Marko 6 exists

`docs` is in the package's `files`, so every `marko@5` install carries 35 pages of offline manual, and `grep -rli 'marko 6\|tags api' packages/runtime-class/docs/ packages/runtime-class/README.md` matches none of them — nothing states that Marko 5 is in maintenance, even though the same `package.json` already depends on `@marko/runtime-tags@^6.3.44`. `getting-started.md` is worse than silent: its recommended setup is `npm init marko -- -t basic`, which resolves to `create-marko@6.3.0` and scaffolds a Tags API app, and the rest of the same page then teaches `class {}` components and `on-` attributes that the scaffold does not use. The only migration page is `marko-5-upgrade.md`, which is Marko 4 → 5 and opens by warning `Do not run npm install marko (without the @^4)`, so a reader on 5.39.36 who searches for "upgrade" is routed backwards. Add a maintenance note and a link to the 5 → 6 interop guide on the index and on `getting-started.md`, and say which major `npm init marko` produces.

Check: `grep -rli 'marko 6\|tags api' packages/runtime-class/docs/` prints nothing while `npm view create-marko version` prints `6.3.0`; expect the index and `getting-started.md` to name the current major and link the 5 → 6 guide.
