# Render `{"a":"x","b":"p","show":true}`
```html
<p>
  xk
</p>
<section>
  <em>
    x
  </em>
</section>
<p>
  xp
</p>
<section>
  <em>
    x
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
<section>
  <em>
    x
  </em>
</section>
<p>
  xp
</p>
<section>
  <em>
    x
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
<section>
  <em>
    y
  </em>
</section>
<p>
  yq
</p>
<section>
  <em>
    y
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
UPDATE: section:nth-of-type(1) > em::text "x" => "y"
UPDATE: section:nth-of-type(2) > em::text "x" => "y"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<section />
<p>
  yq
</p>
<section />
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
REMOVE: section:nth-of-type(1) > em
REMOVE: section:nth-of-type(2) > em
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  ykk
</p>
<section>
  <em>
    y
  </em>
</section>
<p>
  yq
</p>
<section>
  <em>
    y
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: section:nth-of-type(1) > em
INSERT: section:nth-of-type(2) > em
UPDATE: section:nth-of-type(1) > em::text " " => "y"
UPDATE: section:nth-of-type(2) > em::text " " => "y"
```

# Update `{"a":"z","b":"r","show":true}`
```html
<p>
  zkk
</p>
<section>
  <em>
    z
  </em>
</section>
<p>
  zr
</p>
<section>
  <em>
    z
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
UPDATE: section:nth-of-type(1) > em::text "y" => "z"
UPDATE: section:nth-of-type(2) > em::text "y" => "z"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<section>
  <em>
    z
  </em>
</section>
<p>
  zr
</p>
<section>
  <em>
    z
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
<section>
  <em>
    z
  </em>
</section>
<p>
  zr
</p>
<section>
  <em>
    z
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
<section>
  <em>
    w
  </em>
</section>
<p>
  wt
</p>
<section>
  <em>
    w
  </em>
</section>
<button
  class="n"
>
  +
</button>
<button
  class="m"
>
  m
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
UPDATE: section:nth-of-type(1) > em::text "z" => "w"
UPDATE: section:nth-of-type(2) > em::text "z" => "w"
UPDATE: p:nth-of-type(1)::text "zkk" => "wkk"
```
