# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    b0
  </i>
  <span>
    <b>
      b
    </b>
  </span>
</section>
```
## Change
```
INSERT: section
UPDATE: section > i::text@0 "" => "b"
INSERT: section > i + span
INSERT: section > span > b
UPDATE: section > span > b::text " " => "b"
```

# Update
```js
for (const e of d.querySelectorAll(
"section b, section i, section u, section button, section span, section li",
  )) {
e.click();
}
```
```html
<section>
  <button>
    clear
  </button>
</section>
```
## Change
```
REMOVE: section > button + i
REMOVE: section > button + span
```
## Console
```
LOG "b"
```

# Update `{"show":true,"label":"c","tag":"i"}`

# Update
```js
for (const e of d.querySelectorAll(
"section b, section i, section u, section button, section span, section li",
  )) {
e.click();
}
```
