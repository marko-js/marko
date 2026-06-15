# Render
```html
<button>
  inc 1
</button>
<input
  value="z1"
/>
<input
  value="z1"
/>
<input
  value="z1"
/>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc 2
</button>
<input
  default-value="z2"
  value="z1"
/>
<input
  default-value="z2"
  value="z1"
/>
<input
  default-value="z2"
  value="z1"
/>
```
## Change
```
UPDATE: button::text@4 "1" => "2"
UPDATE: input:nth-of-type(1)[value] "z1" => "z2"
UPDATE: input:nth-of-type(2)[value] "z1" => "z2"
UPDATE: input:nth-of-type(3)[value] "z1" => "z2"
```
