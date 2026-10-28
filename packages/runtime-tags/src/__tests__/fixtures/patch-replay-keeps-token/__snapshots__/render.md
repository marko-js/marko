# Render `{"show":false,"label":"a"}`
```html
<main />
```

# Update `{"show":true,"label":"b"}`
```html
<main>
  <b>
    b
  </b>
</main>
```
## Change
```
INSERT: main > b
```

# Update
```js
const { patch } = document.defaultView
                                                         
;
  const signal = new AbortController().signal;
  const token = () => patch({ renderId: "_" }, signal)[0]["x-marko-patch"];
  const before = token();
  await new Promise((resolve, reject) =>
 patch({ renderId: "_" }, signal, 1)[1](
   new Response(";older\n", { headers: { "x-marko-patch": "b" } }),
   () => {},
   () => {},
   resolve,
   reject,
 ),
  );
  assert.notEqual(before, "b;");
  assert.equal(token(), before);
```

# Update `{"show":true,"label":"c"}`
```html
<main>
  <b>
    c
  </b>
</main>
```
## Change
```
UPDATE: main > b::text "b" => "c"
```
