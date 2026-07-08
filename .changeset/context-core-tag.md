---
"marko": minor
---

Add the `<context>` core tag: a provider/consumer mechanism resolved
through the render tree (dynamic extent), not lexical authoring structure,
so a provider works correctly even when consumers are reached through
passed content.

```marko
<context=settings>
  <header/>   // sees settings
  <main/>     // sees settings
</context>
```

```marko
<context/settings from="<settings-provider>"/>
```

A provider whose value is server-only (literals, module/`static` values,
`$global`-derived expressions) contributes zero bytes to the client
bundle: no provider import, no registration, no subscription machinery.

Mutable providers (values derived from `let`/`input` state) fan changes
out to consumers fine-grained: each consumer re-runs individually when
the provided value changes, resumed pages reattach subscriptions without
re-rendering, and consumers created client-side (eg inside an `<if>`
toggled after resume) resolve the provider through its serialized branch
entry. Subscription wiring is only serialized for consumers that can
observe the value client-side (an unread consumer costs nothing), and
same-scope consumers of one provider share a single composed fan-out
entry. The bind shorthand makes a provider writable:

```marko
<let/cart=[]/>
<context:=cart>
  <checkout-panel/>  // may assign to its consumed `cart` variable
</context>
```

A writable consumer's assignment invokes the provider's change handler,
so the write lands in provider state and fans back out to every
consumer.

A template may consume its own context (`from=` resolving to the file
itself): the consume resolves the nearest instance in the render tree,
which enables recursive components and consume-inside-provide patterns.
A self-consume of a server-only value stays in the zero-bytes tier.

A server-only context consumed by content that first renders in the
browser (a toggled `<if>`, appended `<for>` items, re-rendered dynamic
content) still works: compiler reach analysis spots client-re-renderable
regions that may consume it and lazily serializes the provider box (the
server-computed value plus a resolution link) only on those pages, so
every other page serializes nothing. A provider created in the browser
evaluates its value there (under the usual client `$global` rules), so
full client rendering works end to end.

Also fixes a serializer slot-encoding bug (surfaced by root providers
with `serializedGlobals`): two partials for the same slot now encode a
signed delta instead of silently shifting every later scope by one.
