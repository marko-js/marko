# Render


# Render FLUSH


# Render FLUSH
```html
<div>
  Resolved A: A Value
</div>
Rejected B
<div>
  Resolved C: C Value
</div>
<button>
  Before
</button>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Resolved A: A Value
</div>
Rejected B
<div>
  Resolved C: C Value
</div>
<button>
  After
</button>
```
