# Render `{"show":true,"label":"a"}`
```html
<h1>
  a
</h1>
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
<h1>
  a
</h1>
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
<h1>
  b
</h1>
<p>
  b: 1
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: h1::text "a" => "b"
UPDATE: p::text "a: 1" => "b: 1"
UPDATE: body[data-label] "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  b
</h1>
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
<h1>
  c
</h1>
<p>
  c: 2
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: h1::text "b" => "c"
UPDATE: p::text "b: 2" => "c: 2"
UPDATE: body[data-label] "b" => "c"
```
