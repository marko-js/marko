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
  </section>
  <span>
    <b>
      0b
    </b>
  </span>
  <section>
    <button>
      clear
    </button>
  </section>
  <span>
    <b>
      0b
    </b>
  </span>
</section>
<span>
  <b>
    1b
  </b>
</span>
```
## Change
```
INSERT: section
INSERT: section + span
```

# Update
```js
for (const e of d.querySelectorAll("b")) e.click();
```
## Console
```
LOG "tree" 0 "b"
LOG "tree" 0 "b"
LOG "tree" 1 "b"
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
  </section>
  <i>
    <b>
      0c
    </b>
  </i>
  <section>
    <button>
      clear
    </button>
  </section>
  <i>
    <b>
      0c
    </b>
  </i>
</section>
<i>
  <b>
    1c
  </b>
</i>
```
## Change
```
INSERT: section > section:nth-of-type(1) + i
REMOVE: section > i:nth-of-type(1) + span
INSERT: section > i:nth-of-type(1) > b
UPDATE: section > i:nth-of-type(1) > b::text@0 "" => "0"
UPDATE: section > i:nth-of-type(1) > b::text@1 "" => "c"
INSERT: section > section:nth-of-type(2) + i
REMOVE: section > i:nth-of-type(2) + span
INSERT: section > i:nth-of-type(2) > b
UPDATE: section > i:nth-of-type(2) > b::text@0 "" => "0"
UPDATE: section > i:nth-of-type(2) > b::text@1 "" => "c"
INSERT: section + i
REMOVE: i + span
INSERT: i > b
UPDATE: i > b::text@0 "" => "1"
UPDATE: i > b::text@1 "" => "c"
```

# Update
```js
for (const e of d.querySelectorAll("b")) e.click();
```
## Console
```
LOG "tree" 0 "c"
LOG "tree" 0 "c"
LOG "tree" 1 "c"
```
