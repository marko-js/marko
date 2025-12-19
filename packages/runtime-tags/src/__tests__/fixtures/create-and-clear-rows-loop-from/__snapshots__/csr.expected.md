# Render `{"to":3}`

```html
<div>
  0, 1, 2, 3, 
</div>
```

# Mutations
```
INSERT div
```

# Render `{"from":4,"to":6}`

```html
<div>
  4, 5, 6, 
</div>
```

# Mutations
```
INSERT div/#text0, div/#text1
INSERT div/#text2, div/#text3
INSERT div/#text4, div/#text5
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before div/#text0
UPDATE div/#text0 "" => "4"
UPDATE div/#text2 "" => "5"
UPDATE div/#text4 "" => "6"
```

# Render `{"from":7,"to":16,"step":3}`

```html
<div>
  7, 10, 13, 16, 
</div>
```

# Mutations
```
INSERT div/#text0, div/#text1
INSERT div/#text2, div/#text3
INSERT div/#text4, div/#text5
INSERT div/#text6, div/#text7
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before div/#text0
UPDATE div/#text0 "" => "7"
UPDATE div/#text2 "" => "10"
UPDATE div/#text4 "" => "13"
UPDATE div/#text6 "" => "16"
```

# Render `{"from":0,"to":-1,"step":-0.3}`

```html
<div>
  0, -0.3, -0.6, -0.8999999999999999, 
</div>
```

# Mutations
```
INSERT div/#text0, div/#text1
INSERT div/#text2, div/#text3
INSERT div/#text4, div/#text5
INSERT div/#text6, div/#text7
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before #text
REMOVE #text before div/#text0
UPDATE div/#text0 "" => "0"
UPDATE div/#text2 "" => "-0.3"
UPDATE div/#text4 "" => "-0.6"
UPDATE div/#text6 "" => "-0.8999999999999999"
```

# Render `{"from":0,"to":3,"step":0.5}`

```html
<div>
  0, 0.5, 1, 1.5, 2, 2.5, 3, 
</div>
```

# Mutations
```
REMOVE #text after div/#text1
REMOVE #text after div/#text1
REMOVE #text after div/#text1
REMOVE #text after div/#text1
REMOVE #text after div/#text1
REMOVE #text after div/#text1
INSERT div/#text12, div/#text13
INSERT div/#text10, div/#text11
INSERT div/#text8, div/#text9
INSERT div/#text6, div/#text7
INSERT div/#text4, div/#text5
INSERT div/#text2, div/#text3
UPDATE div/#text2 "" => "0.5"
UPDATE div/#text4 "" => "1"
UPDATE div/#text6 "" => "1.5"
UPDATE div/#text8 "" => "2"
UPDATE div/#text10 "" => "2.5"
UPDATE div/#text12 "" => "3"
```