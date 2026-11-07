# Render `{"show":false,"label":"a","tag":"span","rows":[]}`

# Update `{"show":true,"label":"b","tag":"span","rows":[{"id":1,"label":"r1"},{"id":2,"label":"r2"},{"id":3,"label":"r3"}]}`
```html
<section>
  <button>
    clear
  </button>
  <ul>
    <li>
      <span>
        r1
      </span>
    </li>
    <li>
      <span>
        r2
      </span>
    </li>
    <li>
      <span>
        r3
      </span>
    </li>
  </ul>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
for (const e of d.querySelectorAll("section li > *")) {
e.click();
}
```
## Console
```
LOG "r1" "b"
LOG "r2" "b"
LOG "r3" "b"
```

# Update `{"show":true,"label":"c","tag":"i","rows":[{"id":3,"label":"r3"},{"id":1,"label":"r1"}]}`
```html
<section>
  <button>
    clear
  </button>
  <ul>
    <li>
      <i>
        r3
      </i>
    </li>
    <li>
      <i>
        r1
      </i>
    </li>
  </ul>
</section>
```
## Change
```
REMOVE: section > ul > li:nth-of-type(2) + li
REMOVE: section > ul > li:nth-of-type(2) + li
INSERT: section > ul > li
INSERT: section > ul > li:nth-of-type(2) > i
REMOVE: section > ul > li:nth-of-type(2) > i + span
INSERT: section > ul > li:nth-of-type(1) > i
REMOVE: section > ul > li:nth-of-type(1) > i + span
UPDATE: section > ul > li:nth-of-type(2) > i::text " " => "r1"
UPDATE: section > ul > li:nth-of-type(1) > i::text " " => "r3"
```

# Update
```js
for (const e of d.querySelectorAll("section li > *")) {
e.click();
}
```
## Console
```
LOG "r3" "c"
LOG "r1" "c"
```

# Update `{"show":true,"label":"d","tag":"i","rows":[{"id":2,"label":"r2"},{"id":3,"label":"r3"},{"id":1,"label":"r1"},{"id":4,"label":"r4"}]}`
```html
<section>
  <button>
    clear
  </button>
  <ul>
    <li>
      <i>
        r2
      </i>
    </li>
    <li>
      <i>
        r3
      </i>
    </li>
    <li>
      <i>
        r1
      </i>
    </li>
    <li>
      <i>
        r4
      </i>
    </li>
  </ul>
</section>
```
## Change
```
INSERT: section > ul > li:nth-of-type(3) + li
INSERT: section > ul > li
INSERT: section > ul > li:nth-of-type(1) > i
INSERT: section > ul > li:nth-of-type(4) > i
UPDATE: section > ul > li:nth-of-type(1) > i::text " " => "r2"
UPDATE: section > ul > li:nth-of-type(4) > i::text " " => "r4"
```

# Update
```js
for (const e of d.querySelectorAll("section li > *")) {
e.click();
}
```
## Console
```
LOG "r2" "d"
LOG "r3" "d"
LOG "r1" "d"
LOG "r4" "d"
```
