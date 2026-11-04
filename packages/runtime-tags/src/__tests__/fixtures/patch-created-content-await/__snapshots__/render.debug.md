# Render `{"show":false,"label":"a","tag":"span","p":{}}`

# Update `{"show":true,"label":"b","tag":"span","p":{"value":"y"}}`
```html
<section>
  <button>
    clear
  </button>
  <b>
    yb
  </b>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + b
```

# Update
```js
d.querySelector("section b").click();
```

# Update `{"show":true,"label":"c","tag":"i","p":{"value":"z"}}`
```html
<section>
  <button>
    clear
  </button>
  <b>
    zc
  </b>
</section>
```
## Change
```
REMOVE: section > button + b
INSERT: section > button + b
```

# Update
```js
d.querySelector("section b").click();
```
