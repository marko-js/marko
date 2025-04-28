# Render
```html
<!---->
<!---->
<!---->
2
<!---->
<!---->
4
<!---->
<!---->
6
<!---->
<!---->
<button>
  Multiplier: 2
</button>
```

# Mutations
```
INSERT #comment0, #comment1, #comment2, #text0, #comment3, #comment4, #text1, #comment5, #comment6, #text2, #comment7, #comment8, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<!---->
3
<!---->
<!---->
6
<!---->
<!---->
9
<!---->
<!---->
<button>
  Multiplier: 3
</button>
```

# Mutations
```
UPDATE button/#text1 "2" => "3"
UPDATE #text0 "2" => "3"
UPDATE #text1 "4" => "6"
UPDATE #text2 "6" => "9"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<!---->
4
<!---->
<!---->
8
<!---->
<!---->
12
<!---->
<!---->
<button>
  Multiplier: 4
</button>
```

# Mutations
```
UPDATE button/#text1 "3" => "4"
UPDATE #text0 "3" => "4"
UPDATE #text1 "6" => "8"
UPDATE #text2 "9" => "12"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<!---->
5
<!---->
<!---->
10
<!---->
<!---->
15
<!---->
<!---->
<button>
  Multiplier: 5
</button>
```

# Mutations
```
UPDATE button/#text1 "4" => "5"
UPDATE #text0 "4" => "5"
UPDATE #text1 "8" => "10"
UPDATE #text2 "12" => "15"
```