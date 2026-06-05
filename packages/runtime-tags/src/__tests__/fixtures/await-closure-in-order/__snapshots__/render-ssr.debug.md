# Render
```html
<button>
  1
</button>
```

# Update
```js
container.querySelector("button").click();
```

# Update
```js
container.querySelector("button").click();
```

# Update
```html
<button>
  1
</button>
<span>
  Hello
</span>
<span>
  1
</span>
```
## Change
```
INSERT: button + span
INSERT: span:nth-of-type(1)::text("Hello")
INSERT: span:nth-of-type(1) + span
INSERT: span:nth-of-type(2)::text("1")
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
  Hello
</span>
<span>
  2
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
INSERT: span:nth-of-type(1) + span
REMOVE: span:nth-of-type(2) + span
UPDATE: span:nth-of-type(2)::text " " => "2"
```
