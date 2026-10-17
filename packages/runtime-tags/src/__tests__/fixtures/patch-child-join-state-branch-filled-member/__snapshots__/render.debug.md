# Render `{"a":"x"}`
```html
<p>
  xk
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
<button
  class="s"
>
  s
</button>
```

# Update
```js
d.querySelector(sel).click();
```
```html
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
<button
  class="s"
>
  s
</button>
```
## Change
```
REMOVE: p
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  xk
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
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "xk"
```

# Update `{"a":"y"}`
```html
<p>
  yk
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
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p::text "xk" => "yk"
REMOVE: div::text("s:x")
INSERT: div::text("s:y")
```

# Update `{"a":"z"}`
```html
<p>
  zk
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
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p::text "yk" => "zk"
REMOVE: div::text("s:y")
INSERT: div::text("s:z")
```
