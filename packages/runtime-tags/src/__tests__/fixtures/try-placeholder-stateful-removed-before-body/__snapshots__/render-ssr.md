# Render
```html
<button>
  hide
</button>
<div
  data-status="loading"
>
  <section
    class="on"
  >
    A
  </section>
</div>
```
## Console
```
LOG "child mounted" "a"
LOG "shell mounted" "loading"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  hide
</button>
```
## Change
```
REMOVE: button + div
```
## Console
```
LOG "child destroyed" "a"
LOG "shell destroyed" "loading"
```

# Update
```html
<button>
  hide
</button>
```
## Change
```
INSERT: t > div > section
INSERT: t > div > section::text("A")
```
