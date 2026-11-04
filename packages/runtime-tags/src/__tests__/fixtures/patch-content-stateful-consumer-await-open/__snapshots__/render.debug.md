# Render `{"promise":{}}`
```html
<button>
  toggle
</button>
<div>
  <em>
    one
  </em>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  <em>
    one
  </em>
</div>
<section>
  <em>
    one
  </em>
</section>
```
## Change
```
INSERT: div + section
INSERT: section > em
UPDATE: section > em::text " " => "one"
```

# Update `{"promise":{"value":"two"}}`
```html
<button>
  toggle
</button>
<div>
  <em>
    two
  </em>
</div>
<section>
  <em>
    two
  </em>
</section>
```
## Change
```
REMOVE: div > em
REMOVE: section > em
INSERT: div > em
INSERT: section > em
```
