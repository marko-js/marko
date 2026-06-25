---
"marko": patch
"@marko/runtime-tags": patch
---

Fix a Class API child rendered by a Tags API parent not hydrating after SSR when the child hydrates itself (`classHydration: "self"`) but the Tags side passes it no serialize reason (e.g. an interactive or split component like `ebay-button` used without any reactive/event input). Previously only `Descendant` boundaries were serialized in this case, so the child's server-rendered DOM never came alive in the browser.
