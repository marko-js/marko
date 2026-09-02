---
"@marko/runtime-tags": patch
---

Register functions passed to a child template that spreads them onto a dynamic tag. A native dynamic tag serializes its event handlers regardless of the parent's serialize guards, so the parent left them unregistered and SSR threw `Unable to serialize (reading ["EventAttributes:..."])`.
