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
click(document, 0);
await wait();
```
## Console
```
WARN "Assigned a `<draft>` with no `<action>` running, which has no effect. Assign it inside an `<action>`, or inside a function an action calls before it awaits."
```

# Update
```js
click(document, 1);
await wait();
```
## Console
```
WARN "Assigned a `<draft>` with no `<action>` running, which has no effect. Assign it inside an `<action>`, or inside a function an action calls before it awaits."
```
