# Render `{"$global":{"x":"a","serializedGlobals":["x"]}}`
```html
<button>
  t
</button>
```

# Update
```js
d.querySelector("button").click();
```
```html
<p>
  a
</p>
<button>
  t
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a"
```
