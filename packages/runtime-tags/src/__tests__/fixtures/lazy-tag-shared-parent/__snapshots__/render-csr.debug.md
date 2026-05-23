# Render
```html
<button>
  Inc
</button>
```

# Update
```html
<button>
  Inc
</button>
<span>
   
</span>
```
## Change
```
INSERT: button + span
```

# Update
```html
<button>
  Inc
</button>
<span>
   
</span>
<span>
  2
</span>
```
## Change
```
INSERT: button + span
UPDATE: span:nth-of-type(2)::text " " => "2"
```

# Update
```html
<button>
  Inc
</button>
<span>
  1
</span>
<span>
  2
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text " " => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span>
  2
</span>
<span>
  4
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "1" => "2"
UPDATE: span:nth-of-type(2)::text "2" => "4"
```
