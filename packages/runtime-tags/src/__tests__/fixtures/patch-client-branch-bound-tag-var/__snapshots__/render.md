# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    x
  </span>
  <span>
    x
  </span>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
for (const e of d.querySelectorAll("section > :not(button)")) {
e.click();
}
```
## Console
```
LOG "get" "b"
LOG "get" "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    x
  </i>
  <i>
    x
  </i>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i:nth-of-type(1) + span
INSERT: section > i:nth-of-type(1) + i
REMOVE: section > i:nth-of-type(2) + span
```

# Update
```js
for (const e of d.querySelectorAll("section > :not(button)")) {
e.click();
}
```
## Console
```
LOG "get" "c"
LOG "get" "c"
```
