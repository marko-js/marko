# Render `{"show":true,"label":"a"}`
```html
<button>
  clear
</button>
<section>
  <b
    label="a"
  />
</section>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  clear
</button>
<section>
  <b
    label="b"
  />
</section>
```
## Change
```
UPDATE: section > b[label] "a" => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  clear
</button>
<section>
  <b
    label="c"
  />
</section>
```
## Change
```
UPDATE: section > b[label] "b" => "c"
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
REMOVE: section > b
```

# Update `{"show":true,"label":"d"}`
