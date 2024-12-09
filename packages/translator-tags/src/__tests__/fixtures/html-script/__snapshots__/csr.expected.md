# Render {}
```html
<!---->
<script
  type="importmap"
>
  
  {
    "imports": {
      "0": "https://markojs.com",
    }
  }

</script>
<!---->
```

# Mutations
```
inserted #comment0, script1, #comment2
```


# Render 
container.querySelector("script").click()

```html
<!---->
<script
  type="importmap"
>
  
  {
    "imports": {
      "1": "https://markojs.com",
    }
  }

</script>
<!---->
```

# Mutations
```
removed #text in script1
inserted script1/#text0
```


# Render 
container.querySelector("script").click()

```html
<!---->
<script
  type="importmap"
>
  
  {
    "imports": {
      "2": "https://markojs.com",
    }
  }

</script>
<!---->
```

# Mutations
```
removed #text in script1
inserted script1/#text0
```


# Render 
container.querySelector("script").click()

```html
<!---->
<script
  type="importmap"
>
  
  {
    "imports": {
      "3": "https://markojs.com",
    }
  }

</script>
<!---->
```

# Mutations
```
removed #text in script1
inserted script1/#text0
```