# Render `{"note":"a"}`
```html
<button>
  toggle
</button>
<section />
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
```
## Change
```
INSERT: section > em
UPDATE: section > em::text " " => "a"
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
```
## Change
```
UPDATE: section > em::text "a" => "b"
```
