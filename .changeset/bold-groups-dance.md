---
"marko": patch
"@marko/runtime-tags": patch
---

Add native lazy loading of tags.

Tags can be lazily loaded by adding a `load` import attribute, in both the tags API and the class API:

```marko
import Child from "./child.marko" with { load: "visible .selector" }

<Child/>
```

The attribute value is either `render`, which loads the module when the tag first renders in the browser, or one or more `|` separated triggers that start the load:

- `visible <selector>` loads when an element matching the selector intersects the viewport (supports `?rootMargin=`).
- `idle` loads when the browser becomes idle (supports `?timeout=`).
- `media <query>` loads when the media query matches.
- `on<Event> <selector>` loads when the event fires on an element matching the selector.

Lazily loaded content still server renders, tree shakes, and resumes. The server tracks the assets each lazy section needs, writing inline trigger scripts into the HTML as it streams to avoid network waterfalls. Lazy loading requires a bundler integration through the `linkAssets` compiler option.
