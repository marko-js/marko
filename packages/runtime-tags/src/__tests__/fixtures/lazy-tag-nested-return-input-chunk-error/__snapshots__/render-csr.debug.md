# Render
```html
<button
  class="mount"
>
  mount
</button>
```

# Update
```js
document.querySelector(".mount").click();
```

# Update
```html
<button
  class="mount"
>
  mount
</button>
<span
  class="err"
>
  simulated chunk load failure: ./v:child.marko.input_label.mjs
</span>
```
## Change
```
INSERT: .mount + .err
UPDATE: .err::text " " => "simulated chunk load failure: ./v:child.marko.input_label.mjs"
```
