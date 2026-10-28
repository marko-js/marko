# Render `{"label":"a"}`
```html
<p>
  0a
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
  1a
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0a" => "1a"
```

# Update `{"label":"b"}`
```html
<p>
  1b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1a" => "1b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2b
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1b" => "2b"
```

# Update `{"label":"c"}`
```html
<p>
  2c
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "2b" => "2c"
```
