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
