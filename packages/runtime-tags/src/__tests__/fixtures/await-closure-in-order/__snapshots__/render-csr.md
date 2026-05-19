# Render
```html
<button>
  1
</button>
<span>
  1
</span>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
<span>
  3
</span>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: span::text "2" => "3"
```

# Update
```html
<button>
  3
</button>
<span>
  Hello
</span>
<span>
  3
</span>
```
## Change
```
INSERT: button + span
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<span>
  Hello
</span>
<span>
  4
</span>
```
## Change
```
UPDATE: button::text "3" => "4"
UPDATE: span:nth-of-type(2)::text "3" => "4"
```
