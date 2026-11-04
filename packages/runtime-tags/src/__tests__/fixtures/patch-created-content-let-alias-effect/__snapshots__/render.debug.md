# Render `{"show":false,"text":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"text":"b"}`
```html
<button>
  +
</button>
<section>
  <div>
    a
  </div>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > div::text("a")
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  +
</button>
<section>
  <div>
    a!
  </div>
</section>
```
## Change
```
REMOVE: section > div::text("a")
INSERT: section > div::text("a!")
```
