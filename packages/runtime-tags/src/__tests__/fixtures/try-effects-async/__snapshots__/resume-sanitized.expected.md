# Render
```html
<button>
  inc
</button>
<div />
LOADING...
```


# Render FLUSH
```html
<button>
  inc
</button>
<div>
  0
</div>
Async: 0
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  0
</div>
Async: 0
```


# Render ASYNC
```html
<button>
  inc
</button>
<div>
  0
</div>
LOADING...
```


# Render ASYNC
```html
<button>
  inc
</button>
<div>
  1
</div>
Async: 1
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  1
</div>
Async: 1
```


# Render ASYNC
```html
<button>
  inc
</button>
<div>
  1
</div>
LOADING...
```


# Render ASYNC
```html
<button>
  inc
</button>
<div>
  1
</div>
Error: ERROR!
```
