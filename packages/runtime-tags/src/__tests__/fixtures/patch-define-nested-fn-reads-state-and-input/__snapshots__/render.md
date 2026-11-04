# Render `{"step":1,"label":"a"}`
```html
<button>
  a
</button>
<p>
  0
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  a
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: p::text "0" => "1"
```

# Update `{"step":2,"label":"b"}`
```html
<button>
  b
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: button::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<p>
  3
</p>
```
## Change
```
UPDATE: p::text "1" => "3"
```

# Update `{"step":3,"label":"c"}`
```html
<button>
  c
</button>
<p>
  3
</p>
```
## Change
```
UPDATE: button::text "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  c
</button>
<p>
  6
</p>
```
## Change
```
UPDATE: p::text "3" => "6"
```
