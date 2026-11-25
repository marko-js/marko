# Render
```html
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
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
INSERT: span:nth-of-type(1)
INSERT: span:nth-of-type(1)::text("Hello")
INSERT: span:nth-of-type(2)
INSERT: span:nth-of-type(2)::text("1")
```

# Update
```js
document.querySelector("button").click();
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
UPDATE: span:nth-of-type(2)::text "1" => "2"
```
