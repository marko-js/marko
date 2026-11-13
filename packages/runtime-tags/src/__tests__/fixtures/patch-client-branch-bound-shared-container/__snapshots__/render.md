# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <section>
    <button>
      clear
    </button>
    <span>
      <b>
        b
      </b>
    </span>
  </section>
  <section>
    <button>
      clear
    </button>
    <span>
      <b>
        b
      </b>
    </span>
  </section>
</section>
```
## Change
```
INSERT: section
INSERT: section > section:nth-of-type(1) > button + span
INSERT: section > section:nth-of-type(1) > span > b
INSERT: section > section:nth-of-type(2) > button + span
INSERT: section > section:nth-of-type(2) > span > b
UPDATE: section > section:nth-of-type(1) > span > b::text " " => "b"
UPDATE: section > section:nth-of-type(2) > span > b::text " " => "b"
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
REMOVE: section > button + section
REMOVE: section > button + section
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
