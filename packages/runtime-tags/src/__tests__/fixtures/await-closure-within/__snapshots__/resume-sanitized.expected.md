# Render
```html
loading...
```


# Render FLUSH
```html
<button>
  1
</button>
<span>
  1
</span>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<span>
  2
</span>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
<span>
  3
</span>
```
