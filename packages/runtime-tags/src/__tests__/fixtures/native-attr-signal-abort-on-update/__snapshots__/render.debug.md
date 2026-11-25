# Render
```html
<button
  id="inc"
>
  0
</button>
<button
  id="hide"
/>
```

# Update
```js
document.getElementById("inc").click();
```
```html
<div
  data-spread="1"
/>
<div
  data-first="1"
  data-second="1"
/>
<div />
<button
  id="inc"
>
  1
</button>
<button
  id="hide"
/>
```
## Change
```
INSERT: div:nth-of-type(1), div:nth-of-type(2), div:nth-of-type(3)
UPDATE: div:nth-of-type(1)[data-spread] null => "1"
UPDATE: div:nth-of-type(2)[data-first] null => "1"
UPDATE: div:nth-of-type(2)[data-second] null => "1"
UPDATE: #inc::text "0" => "1"
```
## Console
```
LOG "read" "first" 1 false
LOG "read" "second" 1 false
LOG "read" "big" false false
LOG "read" "spread" 1 false
```

# Update
```js
document.getElementById("inc").click();
```
```html
<div
  data-spread="2"
/>
<div
  data-first="2"
  data-second="2"
/>
<div
  data-big=""
/>
<button
  id="inc"
>
  2
</button>
<button
  id="hide"
/>
```
## Change
```
UPDATE: div:nth-of-type(1)[data-spread] "1" => "2"
UPDATE: div:nth-of-type(2)[data-first] "1" => "2"
UPDATE: div:nth-of-type(2)[data-second] "1" => "2"
UPDATE: div:nth-of-type(3)[data-big] null => ""
UPDATE: #inc::text "1" => "2"
```
## Console
```
LOG "read" "first" 2 false
LOG "read" "second" 2 false
LOG "read" "big" true false
LOG "read" "spread" 2 false
LOG "abort" "first" 1
LOG "abort" "second" 1
LOG "abort" "big" false
LOG "abort" "spread" 1
```

# Update
```js
document.getElementById("inc").click();
```
```html
<div
  data-spread="3"
/>
<div
  data-first="3"
  data-second="3"
/>
<div
  data-big=""
/>
<button
  id="inc"
>
  3
</button>
<button
  id="hide"
/>
```
## Change
```
UPDATE: div:nth-of-type(1)[data-spread] "2" => "3"
UPDATE: div:nth-of-type(2)[data-first] "2" => "3"
UPDATE: div:nth-of-type(2)[data-second] "2" => "3"
UPDATE: #inc::text "2" => "3"
```
## Console
```
LOG "read" "first" 3 false
LOG "read" "second" 3 false
LOG "read" "spread" 3 false
LOG "abort" "first" 2
LOG "abort" "second" 2
LOG "abort" "spread" 2
```

# Update
```js
document.getElementById("hide").click();
```
```html
<button
  id="inc"
>
  0
</button>
<button
  id="hide"
/>
```
## Change
```
REMOVE: div
REMOVE: div
REMOVE: div
UPDATE: #inc::text "3" => "0"
```
## Console
```
LOG "abort" "spread" 3
LOG "abort" "first" 3
LOG "abort" "second" 3
LOG "abort" "big" true
```
