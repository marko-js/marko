# Render
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<input />
<button>
  disable
</button>
```
## Change
```
UPDATE: input[disabled] "" => null
UPDATE: button::text "enable" => "disable"
```

# Update
```js
document.querySelector("button").click();
```
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```
## Change
```
UPDATE: input[disabled] null => ""
UPDATE: button::text "disable" => "enable"
```

# Update
```js
document.querySelector("button").click();
```
```html
<input />
<button>
  disable
</button>
```
## Change
```
UPDATE: input[disabled] "" => null
UPDATE: button::text "enable" => "disable"
```
