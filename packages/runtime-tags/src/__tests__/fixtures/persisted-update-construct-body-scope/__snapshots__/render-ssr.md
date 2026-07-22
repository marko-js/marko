# Render `{"$global":{"persisted":true,"view":"home"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section>
  <p
    class="home"
  >
    home
  </p>
</section>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<section>
  <p
    class="home"
  >
    home
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
<section>
  <p
    class="loading"
  >
    loading…
  </p>
</section>
```
## Change
```
REMOVE: section > p
INSERT: section > .loading
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"reports","range":"day"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section>
  <p
    class="status"
  >
    ready of 10
  </p>
</section>
```
## Change
```
INSERT: section > .status
REMOVE: .status + p
UPDATE: .status::text@0 "" => "ready"
```
