# Render `{"which":true,"label":"a"}`
```html
<button
  class="inc"
>
  a 0
</button>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  a 1
</button>
```
## Change
```
UPDATE: .inc::text@2 "0" => "1"
```

# Update `{"which":true,"label":"b"}`
```html
<button
  class="inc"
>
  b 1
</button>
```
## Change
```
UPDATE: .inc::text@0 "a" => "b"
```

# Update `{"which":false,"label":"c"}`
```html
<i>
  c
</i>
```
## Change
```
INSERT: i
REMOVE: i + button
UPDATE: i::text " " => "c"
UPDATE: i::text "" => "c"
```

# Update `{"which":true,"label":"d"}`
```html
<button
  class="inc"
>
  d 0
</button>
```
## Change
```
INSERT: .inc
REMOVE: .inc + i
UPDATE: .inc::text@0 "" => "d"
UPDATE: .inc::text@2 "" => "0"
```
