# Render
```html
<button
  id="change"
>
  change
</button>
<p>
  default
</p>
<p>
  given
</p>
```

# Update
```js
document.querySelector("#change").click();
```
```html
<button
  id="change"
>
  change
</button>
<p>
  default!
</p>
<p>
  given
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "default" => "default!"
```
