# Render `{"wrap":true,"rows":[{"id":1,"label":"a"}]}`
```html
<button>
  toggle
</button>
<section>
  <b>
    a
  </b>
</section>
```

# Update `{"wrap":true,"rows":[{"id":1,"label":"a"},{"id":2,"label":"b"}]}`
```html
<button>
  toggle
</button>
<section>
  <b>
    a
  </b>
</section>
<button>
  toggle
</button>
<section>
  <b>
    b
  </b>
</section>
```
## Change
```
INSERT: section:nth-of-type(1) + :is(button, section)
INSERT: section:nth-of-type(2) > b
UPDATE: section:nth-of-type(2) > b::text " " => "b"
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button>
  toggle
</button>
<button>
  toggle
</button>
```
## Change
```
REMOVE: button:nth-of-type(1) + section
REMOVE: button:nth-of-type(2) + section
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button>
  toggle
</button>
<section>
  <b>
    a
  </b>
</section>
<button>
  toggle
</button>
<section>
  <b>
    b
  </b>
</section>
```
## Change
```
INSERT: button:nth-of-type(1) + section
INSERT: button:nth-of-type(2) + section
INSERT: section:nth-of-type(1) > b
INSERT: section:nth-of-type(2) > b
UPDATE: section:nth-of-type(1) > b::text " " => "a"
UPDATE: section:nth-of-type(2) > b::text " " => "b"
```

# Update
```js
assert.deepEqual(;
Array.from(document.querySelectorAll("b"), (b) => b.textContent),
expected,
  )
```
