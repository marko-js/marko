# Render `{"a":"x","label":"a"}`
```html
<p>
  ax0
</p>
<p>
  a00
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
  ax0
</p>
<p>
  a01
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a00" => "a01"
```

# Update `{"a":"y","label":"b"}`
```html
<p>
  by0
</p>
<p>
  b01
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ax0" => "by0"
UPDATE: p:nth-of-type(2)::text "a01" => "b01"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  by0
</p>
<p>
  b02
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "b01" => "b02"
```

# Update `{"a":"z","label":"c"}`
```html
<p>
  cz0
</p>
<p>
  c02
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "by0" => "cz0"
UPDATE: p:nth-of-type(2)::text "b02" => "c02"
```
