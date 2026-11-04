# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <div>
    b
  </div>
  <button>
    set
  </button>
  <div>
    b
  </div>
  <button>
    set
  </button>
</section>
```
## Change
```
INSERT: section
UPDATE: section > div:nth-of-type(1)::text " " => "b"
UPDATE: section > div:nth-of-type(2)::text " " => "b"
```

# Update
```js
for (const e of d.querySelectorAll(
"section > button:not(:first-child)",
  )) {
e.click();
}
```
```html
<section>
  <button>
    clear
  </button>
  <div
    id="set"
  >
    b
  </div>
  <button>
    set
  </button>
  <div
    id="set"
  >
    b
  </div>
  <button>
    set
  </button>
</section>
```
## Change
```
UPDATE: #set[id] null => "set"
UPDATE: #set[id] null => "set"
```

# Update `{"show":true,"label":"c"}`
```html
<section>
  <button>
    clear
  </button>
  <div
    id="set"
  >
    c
  </div>
  <button>
    set
  </button>
  <div
    id="set"
  >
    c
  </div>
  <button>
    set
  </button>
</section>
```
## Change
```
UPDATE: #set::text "b" => "c"
UPDATE: #set::text "b" => "c"
```

# Update
```js
for (const e of d.querySelectorAll(
"section > button:not(:first-child)",
  )) {
e.click();
}
```
```html
<section>
  <button>
    clear
  </button>
  <div
    id="set"
  >
    c
  </div>
  <button>
    set
  </button>
  <div
    id="set"
  >
    c
  </div>
  <button>
    set
  </button>
</section>
```
## Change
```
UPDATE: #set[id] "set" => "set"
UPDATE: #set[id] "set" => "set"
```
