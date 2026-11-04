# Render `{"show":false,"label":"a","obj":{"n":1}}`
```html
<p>
  1
</p>
```

# Update `{"show":true,"label":"b","obj":{"n":2}}`
```html
<section>
  <button>
    clear
  </button>
  <p>
    same same
  </p>
  <b>
    b
  </b>
  <b>
    b
  </b>
</section>
<p>
  2
</p>
```
## Change
```
INSERT: section
UPDATE: p::text "1" => "2"
UPDATE: section > b:nth-of-type(1)::text " " => "b"
UPDATE: section > b:nth-of-type(2)::text " " => "b"
```

# Update
```js
for (const e of d.querySelectorAll(
"section b, section i, section button:not(:first-child), section span",
  )) {
e.click();
}
```
## Console
```
LOG "b"
LOG "b"
```

# Update `{"show":true,"label":"c","obj":{"n":3}}`
```html
<section>
  <button>
    clear
  </button>
  <p>
    same same
  </p>
  <b>
    c
  </b>
  <b>
    c
  </b>
</section>
<p>
  3
</p>
```
## Change
```
UPDATE: p::text "2" => "3"
UPDATE: section > b:nth-of-type(1)::text "b" => "c"
UPDATE: section > b:nth-of-type(2)::text "b" => "c"
```

# Update
```js
for (const e of d.querySelectorAll(
"section b, section i, section button:not(:first-child), section span",
  )) {
e.click();
}
```
## Console
```
LOG "c"
LOG "c"
```
