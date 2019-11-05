# Render {"label":"number"}
```html

```

# Mutations
```
inserted #text0, #text1
```


# Render "ASYNC"
```html
<button
  id="a"
>
  0
</button>
<button
  id="b"
>
  0
</button>
number0
```

# Mutations
```
inserted button1
inserted button2
inserted #text3
inserted #text4
#text4: "" => "0"
```


# Render 
container.querySelector("#a").click();

```html
<button
  id="a"
>
  0
</button>
<button
  id="b"
>
  0
</button>
number0
```

# Mutations
```

```


# Render 
container.querySelector("#b").click();

```html
<button
  id="a"
>
  0
</button>
<button
  id="b"
>
  0
</button>
number0
```

# Mutations
```

```


# Render "ASYNC"
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  0
</button>
number1
```

# Mutations
```
button1/#text0: "0" => "1"
#text4: "0" => "1"
```


# Render {"label":"num"}
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  0
</button>
num1
```

# Mutations
```
#text3: "number" => "num"
```


# Render {"label":"count"}
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  0
</button>
count1
```

# Mutations
```
#text3: "num" => "count"
```


# Render "ASYNC"
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  2
</button>
count3
```

# Mutations
```
button2/#text0: "0" => "2"
#text4: "1" => "3"
```