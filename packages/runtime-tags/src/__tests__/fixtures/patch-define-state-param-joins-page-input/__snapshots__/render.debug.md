# Render `{"x":"a"}`
```html
<button>
  +
</button>
<i>
  a0
</i>
```

# Update `{"x":"b"}`
```html
<button>
  +
</button>
<i>
  b0
</i>
```
## Change
```
UPDATE: i::text "a0" => "b0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<i>
  b1
</i>
```
## Change
```
UPDATE: i::text "b0" => "b1"
```

# Update `{"x":"c"}`
```html
<button>
  +
</button>
<i>
  c1
</i>
```
## Change
```
UPDATE: i::text "b1" => "c1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<i>
  c2
</i>
```
## Change
```
UPDATE: i::text "c1" => "c2"
```
