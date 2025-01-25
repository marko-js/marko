# Render
```html
<button>
  1
</button>
2 3 5
```

# Mutations
```
INSERT button, #text0, #text1, #text2, #text3, #text4
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
3 4 7
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE #text0 "2" => "3"
UPDATE #text2 "3" => "4"
UPDATE #text4 "5" => "7"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
4 5 9
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE #text0 "3" => "4"
UPDATE #text2 "4" => "5"
UPDATE #text4 "7" => "9"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
5 6 11
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE #text0 "4" => "5"
UPDATE #text2 "5" => "6"
UPDATE #text4 "9" => "11"
```