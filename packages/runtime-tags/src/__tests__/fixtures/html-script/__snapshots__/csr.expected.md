# Render
```html
<script
  type="importmap"
>
  
  {
    "imports": {
      "0": "https://markojs.com",
    }
  }

</script>
```

# Mutations
```
INSERT script
```

# Render
```js
container.querySelector("script").click();
```
```html
<script
  type="importmap"
>
  
  {
    "imports": {
      "1": "https://markojs.com",
    }
  }

</script>
```

# Mutations
```
REMOVE #text in script
INSERT script/#text
```

# Render
```js
container.querySelector("script").click();
```
```html
<script
  type="importmap"
>
  
  {
    "imports": {
      "2": "https://markojs.com",
    }
  }

</script>
```

# Mutations
```
REMOVE #text in script
INSERT script/#text
```

# Render
```js
container.querySelector("script").click();
```
```html
<script
  type="importmap"
>
  
  {
    "imports": {
      "3": "https://markojs.com",
    }
  }

</script>
```

# Mutations
```
REMOVE #text in script
INSERT script/#text
```