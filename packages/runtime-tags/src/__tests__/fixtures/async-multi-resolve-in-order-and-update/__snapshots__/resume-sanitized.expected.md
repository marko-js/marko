# Render
```html
<button>
  increment
</button>
<p>
  1 * 2 = 
</p>
```


# Render FLUSH
```html
<button>
  increment
</button>
<p>
  1 * 2 = 2
</p>
<p>
  2 * 2 = 4
</p>
<p>
  3 * 2 = 6
</p>
<p>
  4 * 2 = 8
</p>
<p>
  5 * 2 = 10
</p>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  increment
</button>
<p>
  1 * 3 = 2
</p>
<p>
  2 * 3 = 4
</p>
<p>
  3 * 3 = 6
</p>
<p>
  4 * 3 = 8
</p>
<p>
  5 * 3 = 10
</p>
```


# Render ASYNC
```html
<button>
  increment
</button>
<p>
  1 * 3 = 
</p>
<p>
  2 * 3 = 
</p>
<p>
  3 * 3 = 
</p>
<p>
  4 * 3 = 
</p>
<p>
  5 * 3 = 
</p>
```


# Render ASYNC
```html
<button>
  increment
</button>
<p>
  1 * 3 = 3
</p>
<p>
  2 * 3 = 6
</p>
<p>
  3 * 3 = 9
</p>
<p>
  4 * 3 = 12
</p>
<p>
  5 * 3 = 15
</p>
```
