# Render `{"first":true}`
```html
<em>
  A 0
</em>
<button>
  0
</button>
```

# Update `{"first":false}`
```html
<em>
  B 0
</em>
<button>
  0
</button>
```
## Change
```
INSERT: em
REMOVE: em + em
UPDATE: em::text@0 "" => "B"
UPDATE: em::text@2 "" => "0"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<em>
  B 1
</em>
<button>
  0
</button>
```
## Change
```
UPDATE: em::text@2 "0" => "1"
```
