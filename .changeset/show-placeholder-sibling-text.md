---
"@marko/runtime-tags": patch
---

Fix a placeholder at the edge of a `<show>` body merging with the text adjacent to the `<show>` tag. Because `<show>` inlines its body into the parent, a template like `<strong>+ <show=cond>${value}</show></strong>` serialized the static `+ ` prefix and the placeholder value as a single text node with no `<!>` separator, so the first client-side update overwrote the whole node and deleted the static text. Sibling-text analysis now looks through `<show>` body boundaries in both directions.
