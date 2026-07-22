---
"marko": patch
---

Guard the tags-compat `ComponentDef.___deserialize` override against a not-yet-resumed scope. A streaming or out-of-order resume of a Class-API child inside a Tags-API parent could make `getScope` return `undefined`, throwing a `TypeError`; it now optional-chains like every other consumer.
