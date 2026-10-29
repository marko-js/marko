# Render `{"a":"x","on":true}`
```html
<p>
  xk
</p>
<div>
  s:x
</div>
<i>
  x
</i>
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
<i>
  x
</i>
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
<i>
  x
</i>
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

# Update `{"a":"y","on":true}`
```html
<p>
  yk
</p>
<div>
  s:y
</div>
<i>
  y
</i>
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
UPDATE: i::text "x" => "y"
UPDATE: p::text "xk" => "yk"
REMOVE: div::text("s:x")
INSERT: div::text("s:y")
```

# Update `{"a":"z","on":true}`
```html
<p>
  zk
</p>
<div>
  s:z
</div>
<i>
  z
</i>
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
UPDATE: i::text "y" => "z"
UPDATE: p::text "yk" => "zk"
REMOVE: div::text("s:y")
INSERT: div::text("s:z")
```
