# Render `{"$global":{"n":5}}`
```html
<span
  class="v"
>
  5
</span>
<button
  class="inc"
>
  +
</button>
```

# Update
```js
d.querySelector("button").click();
```
```html
<span
  class="v"
>
  6
</span>
<button
  class="inc"
>
  +
</button>
```
## Change
```
UPDATE: .v::text "5" => "6"
```
