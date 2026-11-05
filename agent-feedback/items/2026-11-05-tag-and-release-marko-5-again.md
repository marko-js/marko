---
type: dx
impact: low
effort: low
site: .changeset/config.json › privatePackages
---

# Tag and release marko 5 again

Since `packages/runtime-class` went private so `scripts/publish-alias.mts` › `publishAsMarko` could publish it as `marko@m5`, marko 5 releases get no git tag or GitHub release (the last tag is `marko@5.39.7`). `"privatePackages": true` makes `changeset publish` tag the private package as a tag-only release (`marko@5.39.49`) and report it through `CHANGESETS_OUTPUT`, and changesets/action v2 then creates its release from runtime-class's CHANGELOG. GitHub marks the most recently created release as Latest and the action creates them concurrently, so add a step after publishing that runs `gh release edit "@marko/runtime-tags@<version>" --latest` (its `--title "marko@<version>"` would also show marko 6 under its npm name). The tag is created by `changeset publish`, before `publish-alias` puts the version on npm; a failed alias publish is fixed by rerunning, since `publishAsMarko` skips published versions.

Check: with `"privatePackages": true`, `pnpm exec changeset publish-plan` after `changeset version` lists `marko@<version>` under "Packages to tag"; `git tag -l 'marko@5*' | sort -V | tail -1` is `marko@5.39.7`.
