# Render
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button")?.click();
```

# Update
```html
<button>
  0
</button>
<i>
  loading 0
</i>
```
## Change
```
INSERT: button + i
INSERT: i::text("loading ")
INSERT: i::text@0 + ::text("0")
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  1
</button>
<i>
  loading 1
</i>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: i::text@8 "0" => "1"
```

# Update
```html
<button>
  1
</button>
<b>
  loaded 1
</b>
```
## Change
```
INSERT: b::text("loaded ")
INSERT: b::text@0 + ::text("1")
REMOVE: i
INSERT: button + b
UPDATE: b::text@7 "0" => "1"
```
