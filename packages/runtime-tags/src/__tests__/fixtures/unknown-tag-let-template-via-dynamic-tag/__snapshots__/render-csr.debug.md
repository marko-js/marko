# Render `{"framed":true,"label":"a"}`
```html
<button>
  clear
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
  clear
</button>
<section />
```
## Change
```
REMOVE: section > em
```
