# Render `{"show":false,"label":"a"}`
```html
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  +
</button>
<p>
  1 b
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text@0 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  +
</button>
<p>
  2 b
</p>
```
## Change
```
UPDATE: p::text@0 "1" => "2"
```
