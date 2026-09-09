# Render
```html
<probe-badge
  label="hello"
>
  <span>
    child
  </span>
</probe-badge>
```

# Update
```js
const badge = document.querySelector("probe-badge");
const Badge = document.defaultView.customElements.get("probe-badge");
assert.ok(badge instanceof Badge);
assert.equal(badge.getAttribute("label"), "hello");
assert.equal(badge.textContent, "child");
```
