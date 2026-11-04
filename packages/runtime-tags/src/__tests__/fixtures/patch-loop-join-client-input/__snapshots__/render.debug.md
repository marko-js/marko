# Render `{"items":["p","q"],"y":"s"}`
```html
<p>
  0p
</p>
<p>
  0q
</p>
<p>
  sp
</p>
<p>
  sq
</p>
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
  1p
</p>
<p>
  1q
</p>
<p>
  sp
</p>
<p>
  sq
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0p" => "1p"
UPDATE: p:nth-of-type(2)::text "0q" => "1q"
```

# Update `{"items":["r","q"],"y":"t"}`
```html
<p>
  1r
</p>
<p>
  1q
</p>
<p>
  tr
</p>
<p>
  tq
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(3)::text "sp" => "tr"
UPDATE: p:nth-of-type(4)::text "sq" => "tq"
UPDATE: p:nth-of-type(1)::text "1p" => "1r"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  2r
</p>
<p>
  2q
</p>
<p>
  tr
</p>
<p>
  tq
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "1r" => "2r"
UPDATE: p:nth-of-type(2)::text "1q" => "2q"
```

# Update `{"items":["u","v"],"y":"w"}`
```html
<p>
  2u
</p>
<p>
  2v
</p>
<p>
  wu
</p>
<p>
  wv
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(3)::text "tr" => "wu"
UPDATE: p:nth-of-type(4)::text "tq" => "wv"
UPDATE: p:nth-of-type(1)::text "2r" => "2u"
UPDATE: p:nth-of-type(2)::text "2q" => "2v"
```
