# Render `{"b":"b1"}`
```html
<button>
  toggle
</button>
<section>
  <strong>
    two b1
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
    two b2
  </strong>
</section>
```
## Change
```
UPDATE: section > strong::text@4 "b1" => "b2"
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
    one b2
  </em>
</section>
```
## Change
```
REMOVE: section > strong
INSERT: section > em
UPDATE: section > em::text@4 "" => "b2"
```

# Update `{"b":"b3"}`
```html
<button>
  toggle
</button>
<section>
  <em>
    one b3
  </em>
</section>
```
## Change
```
UPDATE: section > em::text@4 "b2" => "b3"
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
  <strong>
    two b3
  </strong>
</section>
```
## Change
```
REMOVE: section > em
INSERT: section > strong
UPDATE: section > strong::text@4 "" => "b3"
```
