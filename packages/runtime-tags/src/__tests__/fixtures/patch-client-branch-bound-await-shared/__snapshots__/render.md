# Render `{"show":false,"label":"a","tag":"span","p":{}}`

# Update `{"show":true,"label":"b","tag":"span","p":{"value":"y"}}`
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
  <span>
    <b>
      b
    </b>
  </span>
  y
</section>
```
## Change
```
INSERT: section
INSERT: section > span:nth-of-type(1) + :is(span, ::text("y"))
```

# Update
```js
for (const e of d.querySelectorAll("section b")) e.click();
```
## Console
```
LOG "inner" "b"
LOG "inner" "b"
```

# Update `{"show":true,"label":"c","tag":"i","p":{"value":"z"}}`
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
  <i>
    <b>
      c
    </b>
  </i>
  z
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i:nth-of-type(1) + span
INSERT: section > i:nth-of-type(1) > b
UPDATE: section > i:nth-of-type(1) > b::text " " => "c"
REMOVE: section > span
REMOVE: section > i:nth-of-type(2) + ::text("z")
INSERT: section > i:nth-of-type(1) + :is(i, ::text("z"))
```

# Update
```js
for (const e of d.querySelectorAll("section b")) e.click();
```
## Console
```
LOG "inner" "c"
LOG "inner" "c"
```
