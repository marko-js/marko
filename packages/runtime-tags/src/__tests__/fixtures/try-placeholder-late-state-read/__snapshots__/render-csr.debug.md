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
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
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
INSERT: i
UPDATE: i::text@8 "" => "1"
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
REMOVE: i
INSERT: b
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  2
</button>
<b>
  loaded 2
</b>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: b::text@7 "1" => "2"
```
