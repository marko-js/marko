# Render
```html
<button
  class="go"
>
  go
</button>
<button
  class="check"
>
  check
</button>
<span>
  none
</span>
```

# Update
```js
document.querySelector(".go").click();
```
```html
<button
  class="go"
>
  go
</button>
<button
  class="check"
>
  check
</button>
<span>
  revealed 1
</span>
```
## Change
```
UPDATE: span::text "none" => "revealed 1"
```

# Update
```js
document.querySelector(".check").click();
```
```html
<button
  class="go"
>
  go
</button>
<button
  class="check"
>
  check
</button>
<span>
  revealed 1 replaced
</span>
```
## Change
```
UPDATE: span::text "revealed 1" => "revealed 1 replaced"
```
