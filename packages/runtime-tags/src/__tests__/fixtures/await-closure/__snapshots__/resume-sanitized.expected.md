# Render
```html
<button>
  1
</button>
loading...
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
loading...
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
loading...
```


# Render FLUSH
```html
<button>
  3
</button>
<span>
  3
</span>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<span>
  4
</span>
```
