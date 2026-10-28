# Render `{"show":false,"label":"one"}`

# Update `{"show":true,"label":"two"}`
```html
<i>
  two
</i>
<button>
  +
</button>
```
## Change
```
INSERT: i, button
UPDATE: i::text " " => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<b>
  two
</b>
<button>
  +
</button>
```
## Change
```
INSERT: b
REMOVE: b + i
UPDATE: b::text " " => "two"
```

# Update `{"show":true,"label":"three"}`
```html
<b>
  three
</b>
<button>
  +
</button>
```
## Change
```
UPDATE: b::text "two" => "three"
```
