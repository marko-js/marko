# Render `{"x":"a","y":"b"}`
```html
<em>
  a
</em>
<p>
  an0
</p>
<i>
  a
</i>
<button
  class="t"
>
  t
</button>
<em>
  m0
</em>
<p>
  m0b
</p>
<i>
  m0
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
```

# Update `{"x":"c","y":"d"}`
```html
<em>
  c
</em>
<p>
  cn0
</p>
<i>
  c
</i>
<button
  class="t"
>
  t
</button>
<em>
  m0
</em>
<p>
  m0d
</p>
<i>
  m0
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
```
## Change
```
UPDATE: em:nth-of-type(1)::text "a" => "c"
UPDATE: p:nth-of-type(1)::text "an0" => "cn0"
UPDATE: i:nth-of-type(1)::text "a" => "c"
UPDATE: p:nth-of-type(2)::text "m0b" => "m0d"
```

# Update
```js
d.querySelector("button.n").click();
```
```html
<em>
  c
</em>
<p>
  cn1
</p>
<i>
  c
</i>
<button
  class="t"
>
  t
</button>
<em>
  m1
</em>
<p>
  m1d
</p>
<i>
  m1
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
```
## Change
```
UPDATE: em:nth-of-type(2)::text "m0" => "m1"
UPDATE: p:nth-of-type(1)::text "cn0" => "cn1"
UPDATE: p:nth-of-type(2)::text "m0d" => "m1d"
UPDATE: i:nth-of-type(2)::text "m0" => "m1"
```

# Update `{"x":"e","y":"f"}`
```html
<em>
  e
</em>
<p>
  en1
</p>
<i>
  e
</i>
<button
  class="t"
>
  t
</button>
<em>
  m1
</em>
<p>
  m1f
</p>
<i>
  m1
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
```
## Change
```
UPDATE: em:nth-of-type(1)::text "c" => "e"
UPDATE: p:nth-of-type(1)::text "cn1" => "en1"
UPDATE: i:nth-of-type(1)::text "c" => "e"
UPDATE: p:nth-of-type(2)::text "m1d" => "m1f"
```
