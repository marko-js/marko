# Render `{"x":1}`
```html
<button>
  1
</button>
```

# Update `{"x":2}`
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
if (document.title !== "2") throw new Error("stale action fn");
```
```html
<button>
  2
</button>
```
## Change
```
INSERT: #document > html > head > title
INSERT: #document > html > head > title::text("2")
```
