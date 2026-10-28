# Render `{"a":"x","c":"p"}`
```html
<i>
  x
</i>
<p>
  xk
</p>
<button
  class="t"
>
  t
</button>
<i>
  x
</i>
<p>
  xp
</p>
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
<i>
  x
</i>
<p>
  xkk
</p>
<button
  class="t"
>
  t
</button>
<i>
  x
</i>
<p>
  xp
</p>
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

# Update `{"a":"y","c":"q"}`
```html
<i>
  y
</i>
<p>
  ykk
</p>
<button
  class="t"
>
  t
</button>
<i>
  y
</i>
<p>
  yq
</p>
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
UPDATE: i:nth-of-type(1)::text "x" => "y"
UPDATE: i:nth-of-type(2)::text "x" => "y"
```

# Update `{"a":"z","c":"r"}`
```html
<i>
  z
</i>
<p>
  zkk
</p>
<button
  class="t"
>
  t
</button>
<i>
  z
</i>
<p>
  zr
</p>
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
UPDATE: p:nth-of-type(1)::text "ykk" => "zkk"
UPDATE: i:nth-of-type(1)::text "y" => "z"
UPDATE: i:nth-of-type(2)::text "y" => "z"
```
