# Render {}
```html
<!---->
<style>
  
  .test {
    content: 0
  }

</style>
<!---->
```

# Mutations
```
inserted #comment0, style1, #comment2
```


# Render 
container.querySelector("style").click()

```html
<!---->
<style>
  
  .test {
    content: 1
  }

</style>
<!---->
```

# Mutations
```
removed #text in style1
inserted style1/#text0
```


# Render 
container.querySelector("style").click()

```html
<!---->
<style>
  
  .test {
    content: 2
  }

</style>
<!---->
```

# Mutations
```
removed #text in style1
inserted style1/#text0
```


# Render 
container.querySelector("style").click()

```html
<!---->
<style>
  
  .test {
    content: 3
  }

</style>
<!---->
```

# Mutations
```
removed #text in style1
inserted style1/#text0
```