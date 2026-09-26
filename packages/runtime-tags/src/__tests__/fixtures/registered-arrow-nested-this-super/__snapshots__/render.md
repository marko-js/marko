# Render
```html
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  base0 Base0 bound0 2
</button>
```
## Change
```
UPDATE: button::text "" => "base0 Base0 bound0 2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  base1 Base1 bound1 3
</button>
```
## Change
```
UPDATE: button::text "base0 Base0 bound0 2" => "base1 Base1 bound1 3"
```
