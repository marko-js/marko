# Render `{"which":true,"label":"a"}`
```html
<button
  class="inc"
>
  a 0
</button>
<p
  data-count="0"
>
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
<p
  data-count="1"
>
  1
</p>
```
## Change
```
UPDATE: .inc::text@2 "0" => "1"
UPDATE: p::text "0" => "1"
UPDATE: p[data-count] "0" => "1"
```

# Update `{"which":true,"label":"b"}`
```html
<button
  class="inc"
>
  b 1
</button>
<p
  data-count="1"
>
  1
</p>
```
## Change
```
UPDATE: .inc::text@0 "a" => "b"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="inc"
>
  b 2
</button>
<p
  data-count="2"
>
  2
</p>
```
## Change
```
UPDATE: .inc::text@2 "1" => "2"
UPDATE: p::text "1" => "2"
UPDATE: p[data-count] "1" => "2"
```

# Update `{"which":false,"label":"c"}`
```html
<i>
  c
</i>
<p
  data-count="-1"
>
  -1
</p>
```
## Change
```
INSERT: i
REMOVE: i + button
UPDATE: p::text "2" => "-1"
UPDATE: i::text " " => "c"
UPDATE: p[data-count] "2" => "-1"
```

# Update `{"which":true,"label":"d"}`
```html
<button
  class="inc"
>
  d 0
</button>
<p
  data-count="0"
>
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
UPDATE: p[data-count] "-1" => "0"
```
