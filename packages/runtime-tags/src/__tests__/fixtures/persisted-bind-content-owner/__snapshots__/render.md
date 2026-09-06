# Render `{"title":"a","show":false}`
```html
<p>
  0
</p>
<section />
```

# Update `{"title":"b","show":true}`
```html
<p>
  0
</p>
<section>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
</section>
```
## Change
```
INSERT: section > :is(span, button)
UPDATE: section > span::text@5 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1
</p>
<section>
  <span>
    Seen 0
  </span>
  <button>
    +
  </button>
</section>
```
## Change
```
UPDATE: p::text "0" => "1"
```
