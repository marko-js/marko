# Render
```html
<span
  id="log"
>
  mount,
</span>
<button
  id="inc"
>
  +
</button>
```

# Update
```js
container.querySelector("#inc")?.click();
```
```html
<span
  id="log"
>
  mount,update1,
</span>
<button
  id="inc"
>
  +
</button>
```
## Change
```
REMOVE: #log::text("mount,")
INSERT: #log::text("mount,update1,")
```

# Update
```js
const win = container.ownerDocument.defaultView;
win.dispatchEvent(new win.Event("pagehide"));
```
```html
<span
  id="log"
>
  mount,update1,
</span>
<button
  id="inc"
>
  +
</button>
```

# Update
```js
container.querySelector("#inc")?.click();
```
```html
<span
  id="log"
>
  mount,update1,
</span>
<button
  id="inc"
>
  +
</button>
```

# Update
```js
const win = container.ownerDocument.defaultView;
win.dispatchEvent(new win.Event("pageshow"));
```
```html
<span
  id="log"
>
  mount,update1,update2,
</span>
<button
  id="inc"
>
  +
</button>
```
## Change
```
REMOVE: #log::text("mount,update1,")
INSERT: #log::text("mount,update1,update2,")
```

# Update
```js
container.querySelector("#inc")?.click();
```
```html
<span
  id="log"
>
  mount,update1,update2,update3,
</span>
<button
  id="inc"
>
  +
</button>
```
## Change
```
REMOVE: #log::text("mount,update1,update2,")
INSERT: #log::text("mount,update1,update2,update3,")
```
