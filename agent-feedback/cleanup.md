# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Remove the unused `AccessorPrefix.Getter` member

`packages/runtime-tags/src/common/accessor.ts:11` | 2026-07-10 | impact:low | effort:low

`AccessorPrefix.Getter` (`"J"`, debug `"Getter:"`) has no references anywhere in `src` — no translator emit site and no runtime read (the `Getter` interface in `translator/util/references.ts:142` is the unrelated hoisted-getter concept). Remove it from both accessor enums, or wire it up if getter state was meant to live on scope keys.
