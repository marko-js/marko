# Render `{"note":"a"}`
```html
<button>
  toggle
</button>
<section />
<section>
  <em>
    a
  </em>
</section>
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
    a
  </em>
</section>
<section>
  <em>
    a
  </em>
</section>
```
## Change
```
INSERT: section:nth-of-type(1) > em
UPDATE: section:nth-of-type(1) > em::text " " => "a"
```

# Update `{"note":"b"}`
```html
<button>
  toggle
</button>
<section>
  <em>
    b
  </em>
</section>
<section>
  <em>
    b
  </em>
</section>
```
## Change
```
UPDATE: section:nth-of-type(2) > em::text "a" => "b"
UPDATE: section:nth-of-type(1) > em::text "a" => "b"
```
