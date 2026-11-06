# Render `{"x":"a","items":["p"]}`
```html
<p>
  ap
</p>
<p>
  m0p
</p>
<button
  class="n"
>
  +
</button>
```

# Update `{"x":"c","items":["r","q","s"]}`
```html
<p>
  cr
</p>
<p>
  cq
</p>
<p>
  cs
</p>
<p>
  m0r
</p>
<p>
  m0q
</p>
<p>
  m0s
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ap" => "cr"
INSERT: p:nth-of-type(1) + p
INSERT: p:nth-of-type(2) + p
INSERT: p:nth-of-type(4) + p
INSERT: p:nth-of-type(5) + p
UPDATE: p:nth-of-type(4)::text "m0p" => "m0r"
UPDATE: p:nth-of-type(5)::text " " => "m0q"
UPDATE: p:nth-of-type(6)::text " " => "m0s"
```

# Update
```js
d.querySelector("button.n").click();
```
```html
<p>
  cr
</p>
<p>
  cq
</p>
<p>
  cs
</p>
<p>
  m1r
</p>
<p>
  m1q
</p>
<p>
  m1s
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(4)::text "m0r" => "m1r"
UPDATE: p:nth-of-type(5)::text "m0q" => "m1q"
UPDATE: p:nth-of-type(6)::text "m0s" => "m1s"
```

# Update `{"x":"e","items":["u","q","s","t"]}`
```html
<p>
  eu
</p>
<p>
  eq
</p>
<p>
  es
</p>
<p>
  et
</p>
<p>
  m1u
</p>
<p>
  m1q
</p>
<p>
  m1s
</p>
<p>
  m1t
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "cr" => "eu"
UPDATE: p:nth-of-type(2)::text "cq" => "eq"
UPDATE: p:nth-of-type(3)::text "cs" => "es"
INSERT: p:nth-of-type(3) + p
INSERT: p:nth-of-type(7) + p
UPDATE: p:nth-of-type(5)::text "m1r" => "m1u"
UPDATE: p:nth-of-type(8)::text " " => "m1t"
```
