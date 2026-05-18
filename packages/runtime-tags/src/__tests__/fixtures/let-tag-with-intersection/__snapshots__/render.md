# Render
```html
<button>
  1
</button>
2 3 5
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
3 4 7
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: ::text@0 "2" => "3"
UPDATE: ::text@2 "3" => "4"
UPDATE: ::text@4 "5" => "7"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
4 5 9
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: ::text@0 "3" => "4"
UPDATE: ::text@2 "4" => "5"
UPDATE: ::text@4 "7" => "9"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
5 6 11
```
## Change
```
UPDATE: button::text "3" => "4"
UPDATE: ::text@0 "4" => "5"
UPDATE: ::text@2 "5" => "6"
UPDATE: ::text@4 "9" => "11"
```
