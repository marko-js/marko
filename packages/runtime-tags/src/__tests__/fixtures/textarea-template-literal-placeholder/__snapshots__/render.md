# Render
```html
<button>
  inc 1
</button>
<textarea>
  premid-1-postend
</textarea>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
<textarea
  default-value="premid-2-postend"
>
  premid-1-postend
</textarea>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
REMOVE: textarea::text("premid-1-postend")
INSERT: textarea::text("premid-2-postend")
```
