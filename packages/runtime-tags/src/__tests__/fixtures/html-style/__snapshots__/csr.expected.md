# Render {}
```html
<style>
  
  .test {
    content: 0
  }

</style>
```

# Mutations
```
inserted style0
```


# Render 
container.querySelector("style").click()

```html
<style>
  
  .test {
    content: 1
  }

</style>
```

# Mutations
```
removed #text in style0
inserted style0/#text0
```


# Render 
container.querySelector("style").click()

```html
<style>
  
  .test {
    content: 2
  }

</style>
```

# Mutations
```
removed #text in style0
inserted style0/#text0
```


# Render 
container.querySelector("style").click()

```html
<style>
  
  .test {
    content: 3
  }

</style>
```

# Mutations
```
removed #text in style0
inserted style0/#text0
```