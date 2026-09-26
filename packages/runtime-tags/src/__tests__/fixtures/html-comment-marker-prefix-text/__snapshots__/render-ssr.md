# Render
```html
<button>
  0
</button>
<!--&#77;_$1 #text/1-->
<!--&#77;_$1 b-->
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<!--&#77;_$1 #text/1-->
<!--&#77;_$1 b-->
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<!--&#77;_$1 #text/1-->
<!--&#77;_$1 b-->
```
## Change
```
UPDATE: button::text "1" => "2"
```
