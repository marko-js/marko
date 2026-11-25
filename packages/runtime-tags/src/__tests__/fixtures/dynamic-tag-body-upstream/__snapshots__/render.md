# Render `{"tag":"div","foo":"a"}`
```html
<div>
  <em>
    a
  </em>
</div>
<div>
  <em>
    a
  </em>
</div>
<button>
  toggle
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <em>
    a
  </em>
</div>
<section>
  <em>
    a
  </em>
</section>
<button>
  toggle
</button>
```
## Change
```
REMOVE: div
INSERT: section
UPDATE: section > em::text " " => "a"
```
