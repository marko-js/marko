# Render `{"a":"x","label":"a"}`
```html
<p>
  ax0
</p>
<p>
  a0x
</p>
<p>
  ax0
</p>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  ax1
</p>
<p>
  a1x
</p>
<p>
  ax1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ax0" => "ax1"
UPDATE: p:nth-of-type(2)::text "a0x" => "a1x"
UPDATE: p:nth-of-type(3)::text "ax0" => "ax1"
```

# Update `{"a":"y","label":"b"}`
```html
<p>
  by1
</p>
<p>
  b1y
</p>
<p>
  by1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ax1" => "by1"
UPDATE: p:nth-of-type(2)::text "a1x" => "b1y"
UPDATE: p:nth-of-type(3)::text "ax1" => "by1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  by2
</p>
<p>
  b2y
</p>
<p>
  by2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "by1" => "by2"
UPDATE: p:nth-of-type(2)::text "b1y" => "b2y"
UPDATE: p:nth-of-type(3)::text "by1" => "by2"
```

# Update `{"a":"z","label":"c"}`
```html
<p>
  cz2
</p>
<p>
  c2z
</p>
<p>
  cz2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "by2" => "cz2"
UPDATE: p:nth-of-type(2)::text "b2y" => "c2z"
UPDATE: p:nth-of-type(3)::text "by2" => "cz2"
```
