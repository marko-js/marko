# Render `{"show":false,"label":"a","tag":"span","flag":true}`

# Update `{"show":true,"label":"b","tag":"span","flag":true}`
```html
<section>
  <button>
    clear
  </button>
  <i>
    b
  </i>
  <button>
    own
  </button>
  <span>
    s
  </span>
  <span>
    t
  </span>
  <button>
    press
  </button>
  <button>
    press
  </button>
  <span>
    function
  </span>
  <i>
    b
  </i>
  <button>
    own
  </button>
  <span>
    s
  </span>
  <span>
    t
  </span>
  <button>
    press
  </button>
  <button>
    press
  </button>
  <span>
    function
  </span>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
for (const e of d.querySelectorAll(
"section > :not(:first-child)",
  )) {
e.click();
}
```
## Console
```
LOG "own" "b"
LOG "static"
LOG "top" "b"
LOG "press" "b"
LOG "h" "b"
LOG "own" "b"
LOG "static"
LOG "top" "b"
LOG "press" "b"
LOG "h" "b"
```

# Update `{"show":true,"label":"c","tag":"em","flag":false}`
```html
<section>
  <button>
    clear
  </button>
  <b
    x="1"
  />
  <button>
    own
  </button>
  <em>
    s
  </em>
  <em>
    t
  </em>
  <button>
    press
  </button>
  <button>
    press
  </button>
  <span>
    function
  </span>
  <b
    x="1"
  />
  <button>
    own
  </button>
  <em>
    s
  </em>
  <em>
    t
  </em>
  <button>
    press
  </button>
  <button>
    press
  </button>
  <span>
    function
  </span>
</section>
```
## Change
```
INSERT: section > button:nth-of-type(1) + b
REMOVE: section > b:nth-of-type(1) + i
UPDATE: section > b:nth-of-type(1)[x] null => "1"
INSERT: section > button:nth-of-type(2) + em
REMOVE: section > em:nth-of-type(1) + span
INSERT: section > em:nth-of-type(1) + em
REMOVE: section > em:nth-of-type(2) + span
INSERT: section > span:nth-of-type(1) + b
REMOVE: section > b:nth-of-type(2) + i
UPDATE: section > b:nth-of-type(2)[x] null => "1"
INSERT: section > button:nth-of-type(5) + em
REMOVE: section > em:nth-of-type(3) + span
INSERT: section > em:nth-of-type(3) + em
REMOVE: section > em:nth-of-type(4) + span
```

# Update
```js
for (const e of d.querySelectorAll(
"section > :not(:first-child)",
  )) {
e.click();
}
```
## Console
```
LOG "own" "c"
LOG "static"
LOG "top" "c"
LOG "press" "c"
LOG "h" "c"
LOG "own" "c"
LOG "static"
LOG "top" "c"
LOG "press" "c"
LOG "h" "c"
```
