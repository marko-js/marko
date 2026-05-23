# Render
```html
<button>
  Inc
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
```

# Update
```js
container.querySelector("button").click();
```
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
  4
</span>
```
## Change
```
INSERT: button + span
UPDATE: span:nth-of-type(2)::text " " => "4"
```

# Update
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
UPDATE: span:nth-of-type(1)::text " " => "2"
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
  3
</span>
<span>
  6
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "2" => "3"
UPDATE: span:nth-of-type(2)::text "4" => "6"
```
