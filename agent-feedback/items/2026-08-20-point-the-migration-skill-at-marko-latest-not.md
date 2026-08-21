---
type: bug
impact: med
effort: low
site: skills/marko-5-to-6-migration/SKILL.md › Flow A — Full migration finish line
---

# Point the migration skill at `marko@latest`, not `marko@next`

Flow A step 3 prescribes `npm i marko@^6` but then adds "and use `marko@next` while 6 is on the `next` dist-tag". The tags have moved: `npm view marko dist-tags` is now `{"next":"6.1.8","latest":"6.3.44","m5":"5.39.36"}`, so Marko 6 _is_ `latest` and `next` is two minors behind it. An agent that takes the parenthetical literally — and it can confirm the stated condition, since 6.1.8 is a 6 — silently lands a stale runtime, and every fix that shipped in 6.2 or 6.3 comes back as an unexplained regression partway through a migration. Drop the clause; the sentence already prescribes the correct range.

Check: `npm view marko dist-tags --json` prints `"next": "6.1.8"` against `"latest": "6.3.44"` while SKILL.md still routes installs at `marko@next`. Expect the step to name only `marko@^6`/`marko@latest`.
