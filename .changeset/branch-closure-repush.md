---
"@marko/runtime-tags": patch
---

Stop serializing a closure value for an `<if>`/`<for>` body when the branch condition only changes together with the value: the owner signal pushes the fresh value before the branch is created, so the serialized copy was never read. Content passed through such a branch no longer needs a resume registration, letting otherwise static templates tree-shake out of the client bundle.
Branch sources excused this way still count toward a separate instantiation-flavored reason, so closures inside content that those branches can instantiate after resume keep their serialization.
