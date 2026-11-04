# Render `{"x":"x","label":"a"}`
```html
<p>
  0xa
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
  1xa
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0xa" => "1xa"
```

# Update `{"x":"y","label":"b"}`
```html
<p>
  1yb
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1xa" => "1yb"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2yb
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1yb" => "2yb"
```

# Update `{"x":"z","label":"c"}`
```html
<p>
  2zc
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "2yb" => "2zc"
```
