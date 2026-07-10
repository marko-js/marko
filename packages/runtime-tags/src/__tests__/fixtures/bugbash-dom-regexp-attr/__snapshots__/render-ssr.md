# Render
```html
<input
  pattern="^a+$"
/>
<button>
  Update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<input
  pattern="/^b+$/"
/>
<button>
  Update
</button>
```
## Change
```
UPDATE: input[pattern] "^a+$" => "/^b+$/"
```
