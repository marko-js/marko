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

# Update
```js
container.querySelector(`script[type="importmap"]`).click();
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
## Change
```
REMOVE: script::text("\n  {\n    \"imports\": {\n      \"0\": \"https://markojs.com\",\n    }\n  }\n")
INSERT: script::text("\n  {\n    \"imports\": {\n      \"1\": \"https://markojs.com\",\n    }\n  }\n")
UPDATE: div::text "0" => "1"
```

# Update
```js
container.querySelector(`script[type="importmap"]`).click();
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
## Change
```
REMOVE: script::text("\n  {\n    \"imports\": {\n      \"1\": \"https://markojs.com\",\n    }\n  }\n")
INSERT: script::text("\n  {\n    \"imports\": {\n      \"2\": \"https://markojs.com\",\n    }\n  }\n")
UPDATE: div::text "1" => "2"
```

# Update
```js
container.querySelector(`script[type="importmap"]`).click();
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
## Change
```
REMOVE: script::text("\n  {\n    \"imports\": {\n      \"2\": \"https://markojs.com\",\n    }\n  }\n")
INSERT: script::text("\n  {\n    \"imports\": {\n      \"3\": \"https://markojs.com\",\n    }\n  }\n")
UPDATE: div::text "2" => "3"
```
