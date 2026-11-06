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
REMOVE: section > button + section
REMOVE: section > button + section
```

# Update `{"show":true,"label":"c","tag":"i"}`

# Update
```js
d.querySelectorAll(
"section b, section i, section u, section button, section span, section li",
  ).forEach((e) => e.click());
```
