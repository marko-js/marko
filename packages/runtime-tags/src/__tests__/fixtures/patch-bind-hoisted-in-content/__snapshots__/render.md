# Render `{"title":"a","show":false}`
```html
<section>
  <p>
    0
  </p>
</section>
```

# Update `{"title":"b","show":true}`
```html
<section>
  <p>
    0
  </p>
</section>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
INSERT: section + :is(span, button)
UPDATE: span::text@5 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p>
    1
  </p>
</section>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: section > p::text "0" => "1"
```
