# Render
```html
<!---->
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<button>
  5
</button>
<button>
  6
</button>
<button>
  7
</button>
<button>
  8
</button>
<button>
  9
</button>
<button>
  10
</button>
<button>
  11
</button>
<button>
  12
</button>
<!---->
```

# Mutations
```
INSERT #comment0, button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, #comment1
```

# Render
```js
click(c, 2);
```
```html
<!---->
<button>
  1
</button>
<button
  data-multiple=""
  data-selected=""
>
  2
</button>
<button>
  3
</button>
<button
  data-multiple=""
>
  4
</button>
<button>
  5
</button>
<button
  data-multiple=""
>
  6
</button>
<button>
  7
</button>
<button
  data-multiple=""
>
  8
</button>
<button>
  9
</button>
<button
  data-multiple=""
>
  10
</button>
<button>
  11
</button>
<button
  data-multiple=""
>
  12
</button>
<!---->
```

# Mutations
```
UPDATE button1[data-selected] null => ""
UPDATE button1[data-multiple] null => ""
UPDATE button3[data-multiple] null => ""
UPDATE button5[data-multiple] null => ""
UPDATE button7[data-multiple] null => ""
UPDATE button9[data-multiple] null => ""
UPDATE button11[data-multiple] null => ""
```

# Render
```js
click(c, 3);
```
```html
<!---->
<button>
  1
</button>
<button>
  2
</button>
<button
  data-multiple=""
  data-selected=""
>
  3
</button>
<button>
  4
</button>
<button>
  5
</button>
<button
  data-multiple=""
>
  6
</button>
<button>
  7
</button>
<button>
  8
</button>
<button
  data-multiple=""
>
  9
</button>
<button>
  10
</button>
<button>
  11
</button>
<button
  data-multiple=""
>
  12
</button>
<!---->
```

# Mutations
```
UPDATE button1[data-selected] "" => null
UPDATE button1[data-multiple] "" => null
UPDATE button2[data-selected] null => ""
UPDATE button2[data-multiple] null => ""
UPDATE button3[data-multiple] "" => null
UPDATE button7[data-multiple] "" => null
UPDATE button8[data-multiple] null => ""
UPDATE button9[data-multiple] "" => null
```

# Render
```js
click(c, 5);
```
```html
<!---->
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<button
  data-multiple=""
  data-selected=""
>
  5
</button>
<button>
  6
</button>
<button>
  7
</button>
<button>
  8
</button>
<button>
  9
</button>
<button
  data-multiple=""
>
  10
</button>
<button>
  11
</button>
<button>
  12
</button>
<!---->
```

# Mutations
```
UPDATE button2[data-selected] "" => null
UPDATE button2[data-multiple] "" => null
UPDATE button4[data-selected] null => ""
UPDATE button4[data-multiple] null => ""
UPDATE button5[data-multiple] "" => null
UPDATE button8[data-multiple] "" => null
UPDATE button9[data-multiple] null => ""
UPDATE button11[data-multiple] "" => null
```