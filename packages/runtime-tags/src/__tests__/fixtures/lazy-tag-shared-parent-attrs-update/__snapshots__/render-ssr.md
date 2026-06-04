# Render
```html
<button>
  Inc
</button>
<span>
  0
</span>
<span>
  0
</span>
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
  1
</span>
<span>
  2
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "0" => "1"
UPDATE: span:nth-of-type(2)::text "0" => "2"
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
