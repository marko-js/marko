# Render `{"show":false,"label":"a","tag":"span"}`

# Update `{"show":true,"label":"b","tag":"span"}`
```html
<section>
  <button>
    clear
  </button>
  <div />
  <span>
    x
  </span>
  <div />
  <span>
    x
  </span>
</section>
```
## Change
```
INSERT: section
```

# Update
```js
for (const e of d.querySelectorAll("section > :not(button)")) {
e.click();
}
```
```html
<section>
  <button>
    clear
  </button>
  <div
    id="x"
  />
  <span>
    x
  </span>
  <div
    id="x"
  />
  <span>
    x
  </span>
</section>
```
## Change
```
UPDATE: #x[id] null => "x"
UPDATE: #x[id] null => "x"
```

# Update `{"show":true,"label":"c","tag":"i"}`
```html
<section>
  <button>
    clear
  </button>
  <div
    id="x"
  />
  <i>
    x
  </i>
  <div
    id="x"
  />
  <i>
    x
  </i>
</section>
```
## Change
```
INSERT: #x + i
REMOVE: section > i:nth-of-type(1) + span
INSERT: #x + i
REMOVE: section > i:nth-of-type(2) + span
```

# Update
```js
for (const e of d.querySelectorAll("section > :not(button)")) {
e.click();
}
```
```html
<section>
  <button>
    clear
  </button>
  <div
    id="x"
  />
  <i>
    x
  </i>
  <div
    id="x"
  />
  <i>
    x
  </i>
</section>
```
## Change
```
UPDATE: #x[id] "x" => "x"
UPDATE: #x[id] "x" => "x"
```
