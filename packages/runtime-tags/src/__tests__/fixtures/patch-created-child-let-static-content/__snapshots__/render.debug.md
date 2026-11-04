# Render `{"show":false}`

# Update `{"show":true}`
```html
<section>
  <button>
    clear
  </button>
  <em>
    static
  </em>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + em
```
