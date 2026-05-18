# Render
```html
0-01-02-03-0
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
0-11-12-13-1
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: ::text@2 "0" => "1"
UPDATE: ::text@5 "0" => "1"
UPDATE: ::text@8 "0" => "1"
UPDATE: ::text@11 "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
0-21-22-23-2
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: ::text@2 "1" => "2"
UPDATE: ::text@5 "1" => "2"
UPDATE: ::text@8 "1" => "2"
UPDATE: ::text@11 "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
0-31-32-33-3
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: ::text@2 "2" => "3"
UPDATE: ::text@5 "2" => "3"
UPDATE: ::text@8 "2" => "3"
UPDATE: ::text@11 "2" => "3"
```
