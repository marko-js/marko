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
d.querySelectorAll("section b, section i, section u").forEach(e => e.click());
```

# Update `{"show":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
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
INSERT: section > section:nth-of-type(1) > button + i
REMOVE: section > section:nth-of-type(1) > i + span
INSERT: section > section:nth-of-type(1) > i > b
UPDATE: section > section:nth-of-type(1) > i > b::text " " => "c"
INSERT: section > section:nth-of-type(2) > button + i
REMOVE: section > section:nth-of-type(2) > i + span
INSERT: section > section:nth-of-type(2) > i > b
UPDATE: section > section:nth-of-type(2) > i > b::text " " => "c"
```

# Update
```js
d.querySelectorAll("section b, section i, section u").forEach(e => e.click());
```
