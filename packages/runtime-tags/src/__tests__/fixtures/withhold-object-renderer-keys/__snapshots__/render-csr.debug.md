# Render `{"on":false,"note":"a","mode":{"a":"a0","e":99,"id":"__tests__/template.marko_1*content","owner":99}}`
```html
<section>
  <em>
    held
  </em>
</section>
<main>
  <div>
    <em>
      a
    </em>
  </div>
</main>
<button
  class="m"
>
  m
</button>
```

# Update `{"on":false,"note":"b","mode":{"a":"a0","e":99,"id":"__tests__/template.marko_1*content","owner":99}}`
```html
<section>
  <em>
    held
  </em>
</section>
<main>
  <div>
    <em>
      b
    </em>
  </div>
</main>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: main > div > em::text "a" => "b"
```

# Update `{"on":true,"note":"c","mode":{"a":"a0","e":99,"id":"__tests__/template.marko_1*content","owner":99}}`
```html
<section>
  <em>
    held
  </em>
</section>
<main>
  <button
    id="toggle"
  >
    toggle
  </button>
  <em>
    c
  </em>
</main>
<button
  class="m"
>
  m
</button>
```
## Change
```
INSERT: main > #toggle
REMOVE: main > em + div
INSERT: #toggle + em
UPDATE: main > em::text " " => "c"
```
