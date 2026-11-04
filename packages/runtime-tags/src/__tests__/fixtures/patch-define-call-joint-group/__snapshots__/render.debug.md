# Render `{"x":1,"y":"a"}`
```html
<p>
  1
</p>
<em>
  a1
</em>
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
  2
</p>
<em>
  a1
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update `{"x":2,"y":"b"}`
```html
<p>
  3
</p>
<em>
  b2
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "a1" => "b2"
UPDATE: p::text "2" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  4
</p>
<em>
  b2
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "3" => "4"
```

# Update `{"x":3,"y":"c"}`
```html
<p>
  5
</p>
<em>
  c3
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "b2" => "c3"
UPDATE: p::text "4" => "5"
```
