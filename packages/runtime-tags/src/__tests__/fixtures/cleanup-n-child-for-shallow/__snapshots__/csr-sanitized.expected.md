# Render
```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
</div>
<div>
  1
</div>
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
<div>
  3
</div>
<span>
  3
</span>
<p>
  3
</p>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
</div>
<div>
  1
</div>
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
</div>
<div>
  1
</div>
<span>
  1
</span>
<p>
  1
</p>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
</div>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  
mounted 1
mounted 2
mounted 3
destroyed 3
destroyed 2
destroyed 1
mounted 1
mounted 2
mounted 3
</div>
<div>
  1
</div>
<span>
  1
</span>
<p>
  1
</p>
<div>
  2
</div>
<span>
  2
</span>
<p>
  2
</p>
<div>
  3
</div>
<span>
  3
</span>
<p>
  3
</p>
```
