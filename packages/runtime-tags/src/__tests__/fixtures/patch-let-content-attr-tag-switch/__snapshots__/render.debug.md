# Render `{"label":"a"}`
```html
<button
  class="switch"
>
  switch
</button>
<b>
  A a
</b>
```

# Update `{"label":"b"}`
```html
<button
  class="switch"
>
  switch
</button>
<b>
  A b
</b>
```
## Change
```
UPDATE: b::text@2 "a" => "b"
```

# Update
```js
document.querySelector("button.switch").click();
```
```html
<button
  class="switch"
>
  switch
</button>
<i>
  B b
</i>
```
## Change
```
INSERT: .switch + i
REMOVE: i + b
UPDATE: i::text@2 "" => "b"
```

# Update `{"label":"c"}`
```html
<button
  class="switch"
>
  switch
</button>
<i>
  B c
</i>
```
## Change
```
UPDATE: i::text@2 "b" => "c"
```
