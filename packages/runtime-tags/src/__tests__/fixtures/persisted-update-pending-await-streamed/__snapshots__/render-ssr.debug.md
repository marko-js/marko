# Render `{"title":"First","note":"pre-nav-note","tick":4,"$global":{"persisted":true}}`
```html
<button
  class="clicks"
>
  clicked 0
</button>
<section>
  loading…
</section>
```

# Update update frame 1 of 2

# Update between frame 1 and 2
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  loading…
</section>
```
## Change
```
UPDATE: .clicks::text@8 "0" => "1"
```

# Update `{"title":"Second","note":"the recommendation","tick":7,"$global":{"persisted":true}}`
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  <p>
    the recommendation
  </p>
</section>
```
## Change
```
REMOVE: section::text("loading…")
INSERT: section > p
```

# Update `{"title":"Third","note":"restocked","tick":2,"$global":{"persisted":true}}`
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  <p>
    restocked
  </p>
</section>
```
## Change
```
UPDATE: section > p::text "the recommendation" => "restocked"
```

# Update
```html
<button
  class="clicks"
>
  clicked 1
</button>
<section>
  <p>
    restocked
  </p>
</section>
```
## Change
```
INSERT: t > p::text("pre-nav-note")
```
