# Render `{"$global":{"x":1,"serializedGlobals":["x"]}}`
```html
<!--1 0-->
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<!--1 1-->
<button>
  1
</button>
```
## Change
```
UPDATE: #comment "1 0" => "1 1"
UPDATE: button::text "0" => "1"
```
