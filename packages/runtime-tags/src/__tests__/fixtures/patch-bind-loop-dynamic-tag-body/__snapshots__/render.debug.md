# Render `{"wrap":true,"rows":[{"id":1,"label":"a"}]}`
```html
<section>
  <button>
    show
  </button>
</section>
```

# Update `{"wrap":true,"rows":[{"id":1,"label":"a"},{"id":2,"label":"b"}]}`
```html
<section>
  <button>
    show
  </button>
</section>
<section>
  <button>
    show
  </button>
</section>
```
## Change
```
INSERT: section:nth-of-type(1) + section
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<section>
  <button>
    show
  </button>
  <b>
    a
  </b>
</section>
<section>
  <button>
    show
  </button>
  <b>
    b
  </b>
</section>
```
## Change
```
INSERT: section:nth-of-type(1) > button + b
INSERT: section:nth-of-type(2) > button + b
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
