# Render `{"which":true,"label":"a"}`
```html
<button
  class="inc"
>
  a 0
</button>
<p>
  0
</p>
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
<p>
  1
</p>
```
## Change
```
UPDATE: .inc::text@2 "0" => "1"
UPDATE: p::text "0" => "1"
```

# Update `{"which":true,"label":"b"}`
```html
<button
  class="inc"
>
  b 1
</button>
<p>
  1
</p>
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
<p>
  -1
</p>
```
## Change
```
INSERT: i
REMOVE: i + button
UPDATE: p::text "1" => "-1"
UPDATE: i::text " " => "c"
```

# Update `{"which":true,"label":"d"}`
```html
<button
  class="inc"
>
  d 0
</button>
<p>
  0
</p>
```
## Change
```
INSERT: .inc
REMOVE: .inc + i
UPDATE: .inc::text@0 "" => "d"
UPDATE: .inc::text@2 "" => "0"
UPDATE: p::text "-1" => "0"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  d 1
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: .inc::text@2 "0" => "1"
UPDATE: p::text "0" => "1"
```
