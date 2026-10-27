# Render
```html
<button>
  plain
</button>
<button>
  after await
</button>
<div>
  1
</div>
```

# Update
```js
document.querySelectorAll("button")[0].click();
await wait(50);
```
## Console
```
WARN "Assigned a `<draft>` with no `<action>` running, which has no effect. Assign it inside an `<action>`, or inside a function an action calls before it awaits."
```

# Update
```js
document.querySelectorAll("button")[1].click();
await wait(100);
```
## Console
```
WARN "Assigned a `<draft>` with no `<action>` running, which has no effect. Assign it inside an `<action>`, or inside a function an action calls before it awaits."
```
