# Render
```html
<button>
  outer
</button>
<button>
  inner
</button>
<section>
  <p>
    body
  </p>
</section>
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  outer
</button>
<button>
  inner
</button>
<section />
```
## Change
```
REMOVE: section > p
```

# Update
```js
document.querySelectorAll("button")[1].click();
```

# Update
```js
document.querySelectorAll("button")[1].click();
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  outer
</button>
<button>
  inner
</button>
<section>
  <p>
    body
  </p>
</section>
```
## Change
```
INSERT: section > p
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  outer
</button>
<button>
  inner
</button>
<section />
```
## Change
```
REMOVE: section > p
```

# Update
```js
document.querySelectorAll("button")[1].click();
```

# Update
```js
document.querySelectorAll("button")[0].click();
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  outer
</button>
<button>
  inner
</button>
<section>
  <p>
    body
  </p>
</section>
```
## Change
```
INSERT: section > p
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  outer
</button>
<button>
  inner
</button>
<section />
```
## Change
```
REMOVE: section > p
```
