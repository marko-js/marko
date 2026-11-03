# Render `{"b":"b1"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    b1
  </strong>
</section>
```

# Update `{"b":"b2"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    b2
  </strong>
</section>
```
## Change
```
UPDATE: section > strong::text "b1" => "b2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section>
  <em>
    one
  </em>
</section>
```
## Change
```
REMOVE: section > strong
INSERT: section > em
```

# Update `{"b":"b3"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section>
  <strong>
    b3
  </strong>
</section>
```
## Change
```
REMOVE: section > em
INSERT: section > strong
UPDATE: section > strong::text " " => "b3"
```
