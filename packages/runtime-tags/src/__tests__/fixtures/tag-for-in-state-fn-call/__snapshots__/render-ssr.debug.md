# Render `{"obj":{"p":1,"q":2},"sel":"p","prefix":"a"}`
```html
<span>
  a1
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```

# Update
```js
document.querySelector("button.s").click();
```
```html
<span>
  a2
</span>
<button
  class="s"
>
  +
</button>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: span::text "a1" => "a2"
```
