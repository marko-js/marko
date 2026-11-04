# Render `{"framed":true,"label":"a"}`
```html
<button>
  0
</button>
<section>
  <em>
    a
  </em>
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<section>
  <em>
    a
  </em>
</section>
```
## Change
```
UPDATE: button::text "0" => "1"
```
