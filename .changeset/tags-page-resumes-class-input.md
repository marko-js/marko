---
"@marko/runtime-tags": patch
---

Fix a Tags page whose only client work is a Class API component that hydrates itself losing the input and body it passes that component: the page now initializes the Tags runtime, which resumes them.
