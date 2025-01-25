# Render
```html
<style>
  
  .test {
    content: 0
  }

</style>
```

# Mutations
```
INSERT style
```

# Render
```js
container.querySelector("style").click();
```
```html
<style>
  
  .test {
    content: 1
  }

</style>
```

# Mutations
```
REMOVE #text in style
INSERT style/#text
```

# Render
```js
container.querySelector("style").click();
```
```html
<style>
  
  .test {
    content: 2
  }

</style>
```

# Mutations
```
REMOVE #text in style
INSERT style/#text
```

# Render
```js
container.querySelector("style").click();
```
```html
<style>
  
  .test {
    content: 3
  }

</style>
```

# Mutations
```
REMOVE #text in style
INSERT style/#text
```