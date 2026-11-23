# Render
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
document.defaultView.matchMedia = (media) =>
  ({
    matches: true,
    media,
    addEventListener() {},
  });
document.querySelector(".toggle").click();
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  loaded
</span>
```
## Change
```
INSERT: .toggle + span
```
