# Render {}
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
inserted #comment0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, #comment13
```


# Render 
c => click(c, 2)

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
button2: attr(data-selected) null => ""
button2: attr(data-multiple) null => ""
button4: attr(data-multiple) null => ""
button6: attr(data-multiple) null => ""
button8: attr(data-multiple) null => ""
button10: attr(data-multiple) null => ""
button12: attr(data-multiple) null => ""
```


# Render 
c => click(c, 3)

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
button2: attr(data-selected) "" => null
button2: attr(data-multiple) "" => null
button3: attr(data-selected) null => ""
button3: attr(data-multiple) null => ""
button4: attr(data-multiple) "" => null
button6: attr(data-multiple) "" => ""
button8: attr(data-multiple) "" => null
button9: attr(data-multiple) null => ""
button10: attr(data-multiple) "" => null
button12: attr(data-multiple) "" => ""
```


# Render 
c => click(c, 5)

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
button3: attr(data-selected) "" => null
button3: attr(data-multiple) "" => null
button5: attr(data-selected) null => ""
button5: attr(data-multiple) null => ""
button6: attr(data-multiple) "" => null
button9: attr(data-multiple) "" => null
button10: attr(data-multiple) null => ""
button12: attr(data-multiple) "" => null
```