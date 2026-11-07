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
for (const e of d.querySelectorAll(
"section > :not(:first-child)",
  )) {
e.click();
}
```
## Console
```
LOG "x" "b"
LOG "x" "b"
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
  <i>
    c
  </i>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i:nth-of-type(1) + span
INSERT: section > i:nth-of-type(1) + i
REMOVE: section > i:nth-of-type(2) + span
UPDATE: section > i:nth-of-type(1)::text " " => "c"
UPDATE: section > i:nth-of-type(2)::text " " => "c"
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
LOG "x" "c"
LOG "x" "c"
```
