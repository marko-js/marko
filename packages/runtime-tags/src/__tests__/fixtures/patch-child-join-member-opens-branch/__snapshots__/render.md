# Render `{"x":"a","y":"p"}`
```html
<p>
  c0p
</p>
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
<p>
  as1
</p>
<p>
  c1p
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p:nth-of-type(2)::text "c0p" => "c1p"
UPDATE: p:nth-of-type(1)::text " " => "as1"
```

# Update `{"x":"b","y":"q"}`
```html
<p>
  bs1
</p>
<p>
  c1q
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "c1p" => "c1q"
UPDATE: p:nth-of-type(1)::text "as1" => "bs1"
```

# Update `{"x":"c","y":""}`
```html
<p>
  cs1
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
REMOVE: p + p
UPDATE: p::text "bs1" => "cs1"
```

# Update
```js
d.querySelector("button.n").click();
```
```html
<p>
  cs2
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p::text "cs1" => "cs2"
```

# Update `{"x":"d","y":"r"}`
```html
<p>
  ds2
</p>
<p>
  c2r
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text "cs2" => "ds2"
UPDATE: p:nth-of-type(2)::text " " => "c2r"
```
