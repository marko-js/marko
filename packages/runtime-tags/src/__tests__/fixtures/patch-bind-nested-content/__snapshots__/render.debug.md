# Render `{"title":"a","show":false}`
```html
<p>
  0
</p>
<section>
  <section />
</section>
```

# Update `{"title":"b","show":true}`
```html
<p>
  0
</p>
<section>
  <section>
    <span>
      Seen 0
    </span>
    <button>
      +
    </button>
  </section>
</section>
```
## Change
```
INSERT: section > section > :is(span, button)
UPDATE: section > section > span::text@5 "" => "0"
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
  <section>
    <span>
      Seen 0
    </span>
    <button>
      +
    </button>
  </section>
</section>
```
## Change
```
UPDATE: p::text "0" => "1"
```
