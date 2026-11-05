---
type: dx
impact: med
effort: med
site: .github/workflows/ci.yml › release
---

# Build releases without publish credentials

The `release` job holds `id-token: write`, `contents: write` and `pull-requests: write` while `pnpm install` runs the root `prepare` script and `@ci:release` builds every package, so the whole toolchain runs with the right to publish `marko`, `@marko/compiler` and `@marko/runtime-tags`. Split it as changesets/action v2's sub-actions allow, keeping the jobs in `ci.yml` (npm trusted publishers are bound to the workflow file): `select-mode` (read), `version` (write and pull requests), `pack` (read; build, `scripts/pkg-override`, `changesets/action/pack@v2`, and the `marko` alias tarballs packed by a pack mode of `publish-alias.mts`), and `publish` (`id-token: write`, plus `contents: write` for the tags and GitHub releases; `pnpm install --ignore-scripts`, `changesets/action/publish@v2` with the pack artifact, then `npm publish <tarball> --tag latest|m5` for the aliases). An environment with required reviewers on `publish` is optional. Note that changesets 3.0.3 records each tarball's integrity in `publish-plan.json` but does not check it at publish.

Check: `sed -n '/^  release:/,$p' .github/workflows/ci.yml` shows one job with all three permissions; `changeset pack --out-dir <dir>` after `pnpm run build && node scripts/pkg-override` writes tarballs matching the published file counts, and `changeset publish --from-pack-dir <dir>` against a local registry publishes them and writes `git-tag` events.
