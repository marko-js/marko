# Render `{"label":"a"}`
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  a!:0
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  a!:1
</button>
```
## Change
```
UPDATE: .k::text "a!:0" => "a!:1"
```

# Update `{"label":"b"}`
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  b!:1
</button>
```
## Change
```
UPDATE: .k::text "a!:1" => "b!:1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="t"
>
  t
</button>
```
## Change
```
REMOVE: .t + button
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  b!:0
</button>
```
## Change
```
INSERT: .t + .k
UPDATE: .k::text " " => "b!:0"
```

# Update `{"label":"c"}`
```html
<button
  class="t"
>
  t
</button>
<button
  class="k"
>
  c!:0
</button>
```
## Change
```
UPDATE: .k::text "b!:0" => "c!:0"
```
