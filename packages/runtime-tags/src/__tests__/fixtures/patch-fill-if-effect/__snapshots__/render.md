# Render `{"show":true,"label":"a"}`
```html
<p>
  a: 0
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p::text "a: 0" => "a: 1"
```

# Update `{"show":true,"label":"b"}`
```html
<p>
  b: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: p::text "a: 1" => "b: 1"
UPDATE: body[data-label] "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: p::text "b: 1" => "b: 2"
```

# Update `{"show":true,"label":"c"}`
```html
<p>
  c: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: p::text "b: 2" => "c: 2"
UPDATE: body[data-label] "b" => "c"
```
