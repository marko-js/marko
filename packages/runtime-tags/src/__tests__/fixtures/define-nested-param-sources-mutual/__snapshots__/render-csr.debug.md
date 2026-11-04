# Render `{"a":"x","label":"a"}`
```html
<p>
  ax0
</p>
<p>
  ax0
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
  ax1
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
UPDATE: p:nth-of-type(2)::text "ax0" => "ax1"
UPDATE: p:nth-of-type(3)::text "ax0" => "ax1"
```

# Update `{"a":"y","label":"b"}`
```html
<p>
  by1
</p>
<p>
  by1
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
UPDATE: p:nth-of-type(2)::text "ax1" => "by1"
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
  by2
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
UPDATE: p:nth-of-type(2)::text "by1" => "by2"
UPDATE: p:nth-of-type(3)::text "by1" => "by2"
```

# Update `{"a":"z","label":"c"}`
```html
<p>
  cz2
</p>
<p>
  cz2
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
UPDATE: p:nth-of-type(2)::text "by2" => "cz2"
UPDATE: p:nth-of-type(3)::text "by2" => "cz2"
```
