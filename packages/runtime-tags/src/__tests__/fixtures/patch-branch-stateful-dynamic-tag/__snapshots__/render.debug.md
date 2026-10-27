# Render `{"show":false,"label":"one"}`
```html
<button>
  +
</button>
```

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
INSERT: i
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

# Update `{"show":false,"label":"four"}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: b
```

# Update `{"show":true,"label":"five"}`
```html
<b>
  five
</b>
<button>
  +
</button>
```
## Change
```
INSERT: b
UPDATE: b::text " " => "five"
```
