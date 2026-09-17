# Render
```html
<button
  id="late"
>
  0
</button>
<button
  id="native"
>
  - -
</button>
```

# Update
```js
document.querySelector("#late").click();
```
```html
<button
  id="late"
>
  0
</button>
<button
  id="native"
>
  late -
</button>
```
## Change
```
UPDATE: #native::text@0 "-" => "late"
```

# Update
```html
<button
  id="late"
>
  7
</button>
<button
  id="native"
>
  late -
</button>
```
## Change
```
UPDATE: #late::text "0" => "7"
```

# Update
```html
<button
  id="late"
>
  0
</button>
<button
  id="native"
>
  - -
</button>
```
## Change
```
UPDATE: #native::text@0 "late" => "-"
UPDATE: #late::text "7" => "0"
```

# Update
```js
document.querySelector("#native").click();
```
```html
<button
  id="late"
>
  8
</button>
<button
  id="native"
>
  - native
</button>
```
## Change
```
UPDATE: #native::text@2 "-" => "native"
UPDATE: #late::text "0" => "8"
```

# Update
```html
<button
  id="late"
>
  9
</button>
<button
  id="native"
>
  - native
</button>
```
## Change
```
UPDATE: #late::text "8" => "9"
```

# Update
```html
<button
  id="late"
>
  0
</button>
<button
  id="native"
>
  - -
</button>
```
## Change
```
UPDATE: #native::text@2 "native" => "-"
UPDATE: #late::text "9" => "0"
```
