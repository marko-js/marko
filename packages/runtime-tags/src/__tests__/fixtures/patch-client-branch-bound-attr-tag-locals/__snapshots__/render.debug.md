# Render `{"show":false,"label":"a","tag":"span","items":["x","y"]}`

# Update `{"show":true,"label":"b","tag":"span","items":["x","y"]}`
```html
<section>
  <button>
    clear
  </button>
  <span>
    x
  </span>
  <span>
    y
  </span>
  <span>
    x
  </span>
  <span>
    y
  </span>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
for (const e of d.querySelectorAll("section > :not(button)"))
e.click();
```
## Console
```
LOG "x" "b"
LOG "y" "b"
LOG "x" "b"
LOG "y" "b"
```

# Update `{"show":true,"label":"c","tag":"i","items":["x","y"]}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    x
  </i>
  <i>
    y
  </i>
  <i>
    x
  </i>
  <i>
    y
  </i>
</section>
```
## Change
```
INSERT: section > button + i
REMOVE: section > i:nth-of-type(1) + span
UPDATE: section > i:nth-of-type(1)::text " " => "x"
INSERT: section > i:nth-of-type(1) + i
REMOVE: section > i:nth-of-type(2) + span
UPDATE: section > i:nth-of-type(2)::text " " => "y"
INSERT: section > i:nth-of-type(2) + i
REMOVE: section > i:nth-of-type(3) + span
UPDATE: section > i:nth-of-type(3)::text " " => "x"
INSERT: section > i:nth-of-type(3) + i
REMOVE: section > i:nth-of-type(4) + span
UPDATE: section > i:nth-of-type(4)::text " " => "y"
```

# Update
```js
for (const e of d.querySelectorAll("section > :not(button)"))
e.click();
```
## Console
```
LOG "x" "c"
LOG "y" "c"
LOG "x" "c"
LOG "y" "c"
```
