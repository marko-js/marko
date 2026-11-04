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
</section>
```
## Change
```
INSERT: section
INSERT: section > button + span
INSERT: section > span:nth-of-type(1) > b
INSERT: section > span:nth-of-type(1) + span
INSERT: section > span:nth-of-type(2) > b
INSERT: section > span:nth-of-type(2) + span
INSERT: section > span:nth-of-type(3) > b
UPDATE: section > span:nth-of-type(1) > b::text " " => "b"
UPDATE: section > span:nth-of-type(2) > b::text " " => "b"
UPDATE: section > span:nth-of-type(3) > b::text " " => "b"
```

# Update
```js
for (const e of d.querySelectorAll("section b")) e.click();
```
## Console
```
LOG "inner" "b"
LOG "inner" "b"
LOG "inner" "b"
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
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i:nth-of-type(1) + span
INSERT: section > i:nth-of-type(1) > b
INSERT: section > i:nth-of-type(1) + i
REMOVE: section > i:nth-of-type(2) + span
INSERT: section > i:nth-of-type(2) > b
INSERT: section > i:nth-of-type(2) + i
REMOVE: section > i:nth-of-type(3) + span
INSERT: section > i:nth-of-type(3) > b
UPDATE: section > i:nth-of-type(1) > b::text " " => "c"
UPDATE: section > i:nth-of-type(2) > b::text " " => "c"
UPDATE: section > i:nth-of-type(3) > b::text " " => "c"
```

# Update
```js
for (const e of d.querySelectorAll("section b")) e.click();
```
## Console
```
LOG "inner" "c"
LOG "inner" "c"
LOG "inner" "c"
```
