# Render `{"a":"x","b":"p","show":true}`
```html
<p>
  xk
</p>
<em>
  x
</em>
<p>
  xp
</p>
<em>
  x
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
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
<p>
  xkk
</p>
<em>
  x
</em>
<p>
  xp
</p>
<em>
  x
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
</button>
<button
  class="s"
>
  s
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
<em>
  y
</em>
<p>
  yq
</p>
<em>
  y
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "xp" => "yq"
UPDATE: p:nth-of-type(1)::text "xkk" => "ykk"
UPDATE: em:nth-of-type(1)::text "x" => "y"
UPDATE: em:nth-of-type(2)::text "x" => "y"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<p>
  yq
</p>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
REMOVE: p:nth-of-type(1) + em
REMOVE: p:nth-of-type(2) + em
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<em>
  y
</em>
<p>
  yq
</p>
<em>
  y
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p:nth-of-type(1) + em
INSERT: p:nth-of-type(2) + em
UPDATE: em:nth-of-type(1)::text " " => "y"
UPDATE: em:nth-of-type(2)::text " " => "y"
```

# Update `{"a":"z","b":"r","show":true}`
```html
<p>
  zkk
</p>
<em>
  z
</em>
<p>
  zr
</p>
<em>
  z
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "yq" => "zr"
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
UPDATE: em:nth-of-type(1)::text "y" => "z"
UPDATE: em:nth-of-type(2)::text "y" => "z"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<em>
  z
</em>
<p>
  zr
</p>
<em>
  z
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
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
  zkk
</p>
<em>
  z
</em>
<p>
  zr
</p>
<em>
  z
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
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
UPDATE: p:nth-of-type(1)::text " " => "zkk"
```

# Update `{"a":"w","b":"t","show":true}`
```html
<p>
  wkk
</p>
<em>
  w
</em>
<p>
  wt
</p>
<em>
  w
</em>
<button
  class="n"
>
  +
</button>
<button
  class="o"
>
  o
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "zr" => "wt"
UPDATE: em:nth-of-type(1)::text "z" => "w"
UPDATE: em:nth-of-type(2)::text "z" => "w"
UPDATE: p:nth-of-type(1)::text "zkk" => "wkk"
```
