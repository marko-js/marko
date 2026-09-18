# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Distinguish proposed comptime behavior from implemented behavior throughout the RFC

`comptime.md:270` | 2026-09-18 | impact:low | effort:low

The opening status note distinguishes implemented and planned features, but later sections describe proposed behavior as current. The evaluation section describes an async `vm.SourceTextModule` loader, while `translator/comptime/evaluate.ts` uses a synchronous loader. The custom-tag section also promises runtime `<return>` lowering, which `translator/comptime/index.ts` explicitly rejects. Label those passages as proposed so readers do not mistake them for supported behavior.
