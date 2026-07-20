# Render
```html
<strong>
  + 3
</strong>
<span>
  3 dmg
</span>
<em>
  + 3
</em>
<b>
  + 3
</b>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<strong>
  + 8
</strong>
<span>
  8 dmg
</span>
<em>
  + 
</em>
<b>
  + 8
</b>
<button>
  inc
</button>
```
## Change
```
UPDATE: strong::text@2 "3" => "8"
UPDATE: span::text@0 "3" => "8"
UPDATE: #document-fragment::text "3" => "8"
UPDATE: b::text@2 "3" => "8"
REMOVE: em::text + ::text("8")
```

# Update
```js
document.querySelector("button").click();
```
```html
<strong>
  + 13
</strong>
<span>
  13 dmg
</span>
<em>
  + 13
</em>
<b>
  + 13
</b>
<button>
  inc
</button>
```
## Change
```
UPDATE: strong::text@2 "8" => "13"
UPDATE: span::text@0 "8" => "13"
UPDATE: b::text@2 "8" => "13"
INSERT: em::text@0 + ::text("13")
```
