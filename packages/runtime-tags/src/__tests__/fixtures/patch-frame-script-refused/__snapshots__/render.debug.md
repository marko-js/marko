# Render `{"label":"a"}`
```html
<p>
  a
</p>
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update
```js
const { patch } = document.defaultView
                                                         
;
  const [, apply] = patch(
 { renderId: "_", cspNonce: "doc" },
 new AbortController().signal,
  );
  const { head } = document;
  const append = head.appendChild;
  head.appendChild =(node) => node;
  const calls= [];
  try {
 await new Promise((resolve) =>
   apply(
 new Response("{}\n", { headers: { "x-marko-patch": "1" } }),
 () => calls.push("commit"),
 () => calls.push("applied"),
 () => resolve(void calls.push("end")),
 () => resolve(void calls.push("fail")),
   ),
 );
  } finally {
 head.appendChild = append;
  assert.deepEqual(calls, ["commit", "fail"]);
}
```
## Console
```
WARN "A patch frame's script did not run. If this page's Content Security Policy blocked it, its script-src must allow the document's nonce, $global.cspNonce (\"doc\")."
ERROR TypeError: script.f is not a function
WARN "A patch rejected: a frame did not apply."
```

# Update `{"label":"c"}`
```html
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
```
