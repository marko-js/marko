# Render
```html
<button>
  inc 1
</button>
<details>
  <summary>
    summary
  </summary>
   body
</details>
<dialog>
  dialog body
</dialog>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
<details>
  <summary>
    summary
  </summary>
   body
</details>
<dialog>
  dialog body
</dialog>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
```
