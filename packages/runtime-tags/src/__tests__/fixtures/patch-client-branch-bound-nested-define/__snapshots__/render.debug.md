# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <span>
      <b>
        b
      </b>
    </span>
  </span>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + span
INSERT: section > span > span
INSERT: section > span > span > b
UPDATE: section > span > span > b::text " " => "b"
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
