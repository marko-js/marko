# Render `{"a":"x","b":"p","show":true}`
```html
<p>
  x:k
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
  x:p
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
<p>
  x:p
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
REMOVE: p
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  x:k
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
  x:p
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
UPDATE: p:nth-of-type(1)::text " " => "x:k"
```

# Update `{"a":"y","b":"q","show":true}`
```html
<p>
  y:k
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
  y:q
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
UPDATE: p:nth-of-type(2)::text "x:p" => "y:q"
UPDATE: p:nth-of-type(1)::text "x:k" => "y:k"
REMOVE: div:nth-of-type(1)::text("s:x")
INSERT: div:nth-of-type(1)::text("s:y")
REMOVE: div:nth-of-type(2)::text("s:x")
INSERT: div:nth-of-type(2)::text("s:y")
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  y:kk
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
  y:q
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
UPDATE: p:nth-of-type(1)::text "y:k" => "y:kk"
```

# Update `{"a":"z","b":"r","show":true}`
```html
<p>
  z:kk
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
  z:r
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
UPDATE: p:nth-of-type(2)::text "y:q" => "z:r"
UPDATE: p:nth-of-type(1)::text "y:kk" => "z:kk"
REMOVE: div:nth-of-type(1)::text("s:y")
INSERT: div:nth-of-type(1)::text("s:z")
REMOVE: div:nth-of-type(2)::text("s:y")
INSERT: div:nth-of-type(2)::text("s:z")
```
