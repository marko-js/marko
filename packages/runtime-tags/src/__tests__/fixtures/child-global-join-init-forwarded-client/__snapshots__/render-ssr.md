# Render `{"$global":{"x":"x","serializedGlobals":["x"]}}`
```html
<p>
  x0
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```

# Update
```js
d.querySelector("button.n").click();
```
```html
<p>
  x1
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p::text "x0" => "x1"
```
