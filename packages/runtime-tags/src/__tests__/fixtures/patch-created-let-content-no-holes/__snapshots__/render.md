# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
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
INSERT: button, section
```

# Update `{"show":true,"label":"c"}`

# Update
```js
d.querySelector("button")?.click();
```

# Update `{"show":true,"label":"d"}`
