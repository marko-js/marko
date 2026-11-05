---
type: dx
impact: high
effort: med
site: .changeset/config.json
---

# Opt marko 5 into versioning and move to changesets/action v2 with changesets 3

`@changesets/cli` is held at 2.x because 3.0 stops versioning private packages by default, and `packages/runtime-class` is private: `changeset version` bumps it and `scripts/publish-alias.mts` › `publishAsMarko` then publishes it as `marko` under `m5`. On 3.x marko 5 would silently stop getting releases; set `"privatePackages": { "version": true, "tag": false }` with the bump. 3.x also requires `changesets/action@v2` in `.github/workflows/ci.yml` (v2 rejects CLI 2 and v1 cannot read CLI 3's publish results): its inputs are renamed (`version-script`, `publish-script`, `commit-message`, `pr-title`), the token goes through `github-token` rather than the `GITHUB_TOKEN` env, release commits are pushed through the GitHub API, and published packages are read from the `CHANGESETS_OUTPUT` file, which `@ci:release` must leave in the environment of `changeset publish`. `@changesets/changelog-github` moves to 1.x alongside. Only a release on `main` exercises the workflow, so land it as its own PR.

Check: the 3.0.0 entry of `@changesets/cli`'s changelog ("Private packages are no longer versioned by default") and the 2.0.0 entry of `changesets/action`'s changelog ("Update to Changesets v3 packages").
