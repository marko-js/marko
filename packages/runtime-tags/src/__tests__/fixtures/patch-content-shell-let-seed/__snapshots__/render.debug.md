# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    b 0
  </button>
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
    b 1
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@2 "0" => "1"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <button>
    c 1
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@0 "b" => "c"
```
