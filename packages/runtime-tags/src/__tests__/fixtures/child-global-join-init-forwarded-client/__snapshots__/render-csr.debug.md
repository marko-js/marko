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

# Update `{"$global":{"x":"y","serializedGlobals":["x"]}}`

# Update
```js
d.querySelector("button.n").click();
```
```html
<p>
  x2
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
UPDATE: p::text "x1" => "x2"
```

# Update `{"$global":{"x":"z","serializedGlobals":["x"]}}`
