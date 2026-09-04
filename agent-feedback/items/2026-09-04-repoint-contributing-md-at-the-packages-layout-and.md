---
type: dx
impact: high
effort: low
site: .github/CONTRIBUTING.md
---

# Repoint CONTRIBUTING.md at the packages layout and drop the dead `fails` mechanism

The guide still describes the pre-monorepo tree. Its "Adding tests" section links `../test/render/fixtures/for-tag/{template.marko,expected.html,test.js}` and its label list links `../src/compiler`, `../src/runtime` and `../src/taglib` — neither `test/` nor `src/` exists at the repo root any more, and no suite reads that fixture shape. Its "Adding a failing test case" section documents `fails` and `fails_hydrate` properties exported from a fixture's `test.js`, which `runtime-tags`' `TestConfig` does not define, so a contributor cannot land a failing repro the way the guide instructs. A newcomer following it literally fails on the first step and only recovers by finding `AGENTS.md`, which is accurate — the stale file costs the whole first-contribution loop. Point the fixture section at `packages/runtime-tags/src/__tests__/fixtures/` and its documented anatomy, and either restore an expected-failure mechanism or say plainly that there is none.

Check: `ls test src` from the repo root — neither path exists. `TestConfig` is defined at `packages/runtime-tags/src/__tests__/main.test.ts` (`export type TestConfig`) and declares no `fails` member, and `grep -rn "fails_hydrate" packages/runtime-tags` returns nothing, so neither field the guide documents exists anywhere in the package it points contributors at.
