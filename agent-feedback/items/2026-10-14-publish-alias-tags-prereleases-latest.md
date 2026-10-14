---
type: dx
impact: med
effort: low
site: scripts/publish-alias.mts › publishAsMarko
---

# Publish the `marko` alias under the prerelease's tag, not `latest`

`publishAsMarko("runtime-tags")` defaults `tag` to `"latest"`, so a prerelease version of `@marko/runtime-tags` (changesets pre mode, e.g. `6.1.0-next.0` published under `next`) is republished as `marko@6.1.0-next.0` with the `latest` dist-tag, and every `npm install marko` gets the prerelease. Derive the tag from the version (its prerelease identifier, else `latest`) or pass the tag changesets used, so the alias always matches the scoped package's channel.

Check: `sed -n 1,25p scripts/publish-alias.mts` shows `publishAsMarko("runtime-tags")` called without a tag and `--tag ${tag}` defaulting to `latest`.
