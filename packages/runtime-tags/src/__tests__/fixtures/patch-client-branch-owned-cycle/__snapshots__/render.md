# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <button>
    array
  </button>
  <button>
    set
  </button>
  <button>
    map
  </button>
  <p>
    true,function,true,true,function
  </p>
</section>
```
## Change
```
INSERT: section
UPDATE: section > p::text "" => "true,function,true,true,function"
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
