# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <b>
    b
  </b>
  <i>
    b
  </i>
</section>
```
## Change
```
INSERT: section
UPDATE: section > b::text " " => "b"
UPDATE: section > i::text " " => "b"
```

# Update
```js
d.querySelectorAll(
"section b, section i, section u, section button, section span, section li",
  ).forEach((e) => e.click());
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
REMOVE: section > button + b
REMOVE: section > button + i
```

# Update `{"show":true,"label":"c","tag":"i"}`

# Update
```js
d.querySelectorAll(
"section b, section i, section u, section button, section span, section li",
  ).forEach((e) => e.click());
```
