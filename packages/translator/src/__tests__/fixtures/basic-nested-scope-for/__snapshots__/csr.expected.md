# Render {}
```html
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
```

# Mutations
```
inserted button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11
```


# Render 
(c) => click(c, 2)

```html
<button>
  1
</button>
<button
  data-multiple="true"
  data-selected="true"
>
  2
</button>
<button>
  3
</button>
<button
  data-multiple="true"
>
  4
</button>
<button>
  5
</button>
<button
  data-multiple="true"
>
  6
</button>
<button>
  7
</button>
<button
  data-multiple="true"
>
  8
</button>
<button>
  9
</button>
<button
  data-multiple="true"
>
  10
</button>
<button>
  11
</button>
<button
  data-multiple="true"
>
  12
</button>
```

# Mutations
```
button1: attr(data-selected) null => "true"
button1: attr(data-multiple) null => "true"
button3: attr(data-multiple) null => "true"
button5: attr(data-multiple) null => "true"
button7: attr(data-multiple) null => "true"
button9: attr(data-multiple) null => "true"
button11: attr(data-multiple) null => "true"
```


# Render 
(c) => click(c, 3)

```html
<button>
  1
</button>
<button>
  2
</button>
<button
  data-multiple="true"
  data-selected="true"
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
  data-multiple="true"
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
  data-multiple="true"
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
  data-multiple="true"
>
  12
</button>
```

# Mutations
```
button1: attr(data-selected) "true" => null
button1: attr(data-multiple) "true" => null
button2: attr(data-selected) null => "true"
button2: attr(data-multiple) null => "true"
button3: attr(data-multiple) "true" => null
button5: attr(data-multiple) "true" => "true"
button7: attr(data-multiple) "true" => null
button8: attr(data-multiple) null => "true"
button9: attr(data-multiple) "true" => null
button11: attr(data-multiple) "true" => "true"
```


# Render 
(c) => click(c, 5)

```html
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
  data-multiple="true"
  data-selected="true"
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
  data-multiple="true"
>
  10
</button>
<button>
  11
</button>
<button>
  12
</button>
```

# Mutations
```
button2: attr(data-selected) "true" => null
button2: attr(data-multiple) "true" => null
button4: attr(data-selected) null => "true"
button4: attr(data-multiple) null => "true"
button5: attr(data-multiple) "true" => null
button8: attr(data-multiple) "true" => null
button9: attr(data-multiple) null => "true"
button11: attr(data-multiple) "true" => null
```