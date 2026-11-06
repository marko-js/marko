# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    b
  </span>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
d.querySelector("section > span, section > i").click();
```
## Console
```
LOG "clicked" "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    c
  </i>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i + span
UPDATE: section > i::text " " => "c"
```

# Update
```js
d.querySelector("section > span, section > i").click();
```
## Console
```
LOG "clicked" "c"
```
