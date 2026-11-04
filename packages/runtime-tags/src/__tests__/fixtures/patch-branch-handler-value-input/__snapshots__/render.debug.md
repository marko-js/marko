# Render `{"mode":"a"}`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="go"
>
  go
</button>
<output>
  -
</output>
```

# Update
```js
document.querySelector("button.go").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="go"
>
  go
</button>
<output>
  A
</output>
```
## Change
```
UPDATE: output::text "-" => "A"
```

# Update `{"mode":"b"}`

# Update
```js
document.querySelector("button.go").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="go"
>
  go
</button>
<output>
  B
</output>
```
## Change
```
UPDATE: output::text "A" => "B"
```
