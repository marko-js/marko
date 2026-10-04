# Render
```html
<template />
<button>
  toggle
</button>
<pre />
```

# Update
```js
const { content } = document.querySelector("template");
document.querySelector("pre").textContent = [
  content.textContent,
  content.querySelector("template").content.textContent,
].join("|");
```
```html
<template />
<button>
  toggle
</button>
<pre>
  shownonchild on|inner on
</pre>
```
## Change
```
INSERT: pre::text("shownonchild on|inner on")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
const { content } = document.querySelector("template");
document.querySelector("pre").textContent = [
  content.textContent,
  content.querySelector("template").content.textContent,
].join("|");
```
```html
<template />
<button>
  toggle
</button>
<pre>
  offchild off|inner off
</pre>
```
## Change
```
REMOVE: pre::text("shownonchild on|inner on")
INSERT: pre::text("offchild off|inner off")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
const { content } = document.querySelector("template");
document.querySelector("pre").textContent = [
  content.textContent,
  content.querySelector("template").content.textContent,
].join("|");
```
```html
<template />
<button>
  toggle
</button>
<pre>
  shownonchild on|inner on
</pre>
```
## Change
```
REMOVE: pre::text("offchild off|inner off")
INSERT: pre::text("shownonchild on|inner on")
```
