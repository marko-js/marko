# Render
```html
<!---->
0-01-02-03-0
<button>
  0
</button>
```

# Mutations
```
INSERT #comment, #text0, #text1, #text2, #text3, #text4, #text5, #text6, #text7, #text8, #text9, #text10, #text11, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
0-11-12-13-1
<button>
  1
</button>
```

# Mutations
```
UPDATE button/#text "0" => "1"
UPDATE #text2 "0" => "1"
UPDATE #text5 "0" => "1"
UPDATE #text8 "0" => "1"
UPDATE #text11 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
0-21-22-23-2
<button>
  2
</button>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE #text2 "1" => "2"
UPDATE #text5 "1" => "2"
UPDATE #text8 "1" => "2"
UPDATE #text11 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
0-31-32-33-3
<button>
  3
</button>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE #text2 "2" => "3"
UPDATE #text5 "2" => "3"
UPDATE #text8 "2" => "3"
UPDATE #text11 "2" => "3"
```