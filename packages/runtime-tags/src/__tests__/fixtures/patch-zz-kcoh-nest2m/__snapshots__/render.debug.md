# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    <b>
      b
    </b>
  </span>
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
d.querySelectorAll("section b, section i, section u").forEach(e => e.click());
```

# Update `{"show":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    <b>
      c
    </b>
  </i>
  <section>
    <button>
      clear
    </button>
    <i>
      <b>
        c
      </b>
    </i>
  </section>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i + span
INSERT: section > i > b
UPDATE: section > i > b::text " " => "c"
INSERT: section > section > button + i
REMOVE: section > section > i + span
INSERT: section > section > i > b
UPDATE: section > section > i > b::text " " => "c"
```

# Update
```js
d.querySelectorAll("section b, section i, section u").forEach(e => e.click());
```
