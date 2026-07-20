# Render
```html
<button>
  pick
</button>
<button>
  pick
</button>
<div
  class="log"
/>
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  pick
</button>
<button>
  pick
</button>
<div
  class="log"
>
  [b]
</div>
```
## Change
```
UPDATE: .log::text "" => "[b]"
```
