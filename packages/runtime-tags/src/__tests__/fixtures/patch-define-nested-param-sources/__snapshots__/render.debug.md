# Render `{"a":"x","label":"a"}`
```html
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
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "ax0" => "ax1"
```

# Update `{"a":"y","label":"b"}`
```html
<p>
  by1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "ax1" => "by1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  by2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "by1" => "by2"
```

# Update `{"a":"z","label":"c"}`
```html
<p>
  cz2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "by2" => "cz2"
```
