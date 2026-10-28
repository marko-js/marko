# Render `{"label":"a"}`
```html
<button
  class="add"
>
  add
</button>
<p>
  <em>
    a
  </em>
</p>
```

# Update `{"label":"b"}`
```html
<button
  class="add"
>
  add
</button>
<p>
  <em>
    b
  </em>
</p>
```
## Change
```
UPDATE: p > em::text "a" => "b"
```

# Update
```js
d.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
```
## Change
```
REMOVE: .add + p
```

# Update `{"label":"c"}`
