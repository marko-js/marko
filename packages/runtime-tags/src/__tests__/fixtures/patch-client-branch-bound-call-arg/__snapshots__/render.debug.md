# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <button>
    call
  </button>
  <button>
    call
  </button>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
for (const e of d.querySelectorAll(
"section > :not(:first-child)",
  )) {
e.click();
}
```
## Console
```
LOG "fn" "b"
LOG "fn" "b"
```

# Update `{"show":true,"label":"c"}`

# Update
```js
for (const e of d.querySelectorAll(
"section > :not(:first-child)",
  )) {
e.click();
}
```
## Console
```
LOG "fn" "c"
LOG "fn" "c"
```
