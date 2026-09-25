# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<h1>
  inner body: registered when the host is a component
</h1>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
inner body: registered when the host is a component
<h1>
  inner body: registered when the host is a component
</h1>
```
## Change
```
INSERT: #toggle + ::text("inner body: registered when the host is a component")
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<h1>
  inner body: registered when the host is a component
</h1>
```
## Change
```
REMOVE: #toggle + ::text("inner body: registered when the host is a component")
```
