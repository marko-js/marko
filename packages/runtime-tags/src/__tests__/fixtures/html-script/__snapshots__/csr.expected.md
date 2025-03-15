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
<div>
  0
</div>
```

# Mutations
```
INSERT script, div
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
<div>
  1
</div>
```

# Mutations
```
REMOVE #text in script
INSERT script/#text
UPDATE div/#text "0" => "1"
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
<div>
  2
</div>
```

# Mutations
```
REMOVE #text in script
INSERT script/#text
UPDATE div/#text "1" => "2"
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
<div>
  3
</div>
```

# Mutations
```
REMOVE #text in script
INSERT script/#text
UPDATE div/#text "2" => "3"
```