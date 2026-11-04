# Render `{"a":"x","b":"p","show":true}`
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
<p>
  xp
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
  xkk
</p>
<div>
  s:x
</div>
<button
  class="t"
>
  t
</button>
<p>
  xp
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
UPDATE: p:nth-of-type(1)::text "xk" => "xkk"
```

# Update `{"a":"y","b":"q","show":true}`
```html
<p>
  ykk
</p>
<div>
  s:y
</div>
<button
  class="t"
>
  t
</button>
<p>
  yq
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
UPDATE: p:nth-of-type(2)::text "xp" => "yq"
UPDATE: p:nth-of-type(1)::text "xkk" => "ykk"
REMOVE: div:nth-of-type(1)::text("s:x")
INSERT: div:nth-of-type(1)::text("s:y")
REMOVE: div:nth-of-type(2)::text("s:x")
INSERT: div:nth-of-type(2)::text("s:y")
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  ykkk
</p>
<div>
  s:y
</div>
<button
  class="t"
>
  t
</button>
<p>
  yq
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
UPDATE: p:nth-of-type(1)::text "ykk" => "ykkk"
```

# Update `{"a":"z","b":"r","show":true}`
```html
<p>
  zkkk
</p>
<div>
  s:z
</div>
<button
  class="t"
>
  t
</button>
<p>
  zr
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
UPDATE: p:nth-of-type(2)::text "yq" => "zr"
UPDATE: p:nth-of-type(1)::text "ykkk" => "zkkk"
REMOVE: div:nth-of-type(1)::text("s:y")
INSERT: div:nth-of-type(1)::text("s:z")
REMOVE: div:nth-of-type(2)::text("s:y")
INSERT: div:nth-of-type(2)::text("s:z")
```
