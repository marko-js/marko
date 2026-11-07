# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <button>
    map value
  </button>
  <button>
    set member
  </button>
  <button>
    map key
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
"section b, section i, section button:not(:first-child), section span",
  )) {
e.click();
}
```
## Console
```
LOG "fn" "b"
LOG "fn" "b"
LOG "fn" "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`

# Update
```js
for (const e of d.querySelectorAll(
"section b, section i, section button:not(:first-child), section span",
  )) {
e.click();
}
```
## Console
```
LOG "fn" "c"
LOG "fn" "c"
LOG "fn" "c"
```
