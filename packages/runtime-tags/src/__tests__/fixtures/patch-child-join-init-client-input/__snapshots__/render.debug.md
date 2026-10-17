# Render `{"a":"x"}`
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
document.querySelector("button.n").click();
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

# Update `{"a":"y"}`
```html
<p>
  y1
</p>
<div>
  s:y
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
UPDATE: p::text "x1" => "y1"
REMOVE: div::text("s:x")
INSERT: div::text("s:y")
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  y2
</p>
<div>
  s:y
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
UPDATE: p::text "y1" => "y2"
```

# Update `{"a":"z"}`
```html
<p>
  z2
</p>
<div>
  s:z
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
UPDATE: p::text "y2" => "z2"
REMOVE: div::text("s:y")
INSERT: div::text("s:z")
```
