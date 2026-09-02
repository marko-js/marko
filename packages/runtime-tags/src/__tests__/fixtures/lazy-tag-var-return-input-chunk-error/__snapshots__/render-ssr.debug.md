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
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: .mount + .focus
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
REMOVE: .err + button
UPDATE: .err::text " " => "simulated chunk load failure: ./v:child.marko.input_label.mjs"
```
