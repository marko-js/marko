# Render `{"note":"first","tick":4,"$global":{"persisted":true}}`
```html
<button
  class="toggle"
>
  hide
</button>
<section>
  loading…
</section>
```

# Update update frame 1 of 2

# Update between frame 1 and 2
```html
<button
  class="toggle"
>
  show
</button>
```
## Change
```
UPDATE: .toggle::text "hide" => "show"
REMOVE: .toggle + section
```

# Update `{"note":"second","tick":7,"$global":{"persisted":true}}`

# Update
```js
container.querySelector("button.toggle").click();
```
```html
<button
  class="toggle"
>
  hide
</button>
<section>
  <p
    class="note"
  >
    second
  </p>
</section>
```
## Change
```
UPDATE: .toggle::text "show" => "hide"
INSERT: .toggle + section
INSERT: section > .note
UPDATE: .note::text " " => "second"
```

# Update
```html
<button
  class="toggle"
>
  hide
</button>
<section>
  <p
    class="note"
  >
    second
  </p>
</section>
```
## Change
```
INSERT: t > p::text("first")
```
