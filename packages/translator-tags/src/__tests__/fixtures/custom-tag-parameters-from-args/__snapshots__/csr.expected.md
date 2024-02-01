# Render {}
```html
<button
  class="inc"
>
  1,10
</button>
<div>
  Counts: 1,10
</div>
```

# Mutations
```
inserted button0, div1
```


# Render 
container.querySelector("button").click()

```html
<button
  class="inc"
>
  2,11
</button>
<div>
  Counts: 2,11
</div>
```

# Mutations
```
button0/#text0: "1" => "2"
button0/#text2: "10" => "11"
div1/#text1: "1" => "2"
div1/#text3: "10" => "11"
```


# Render 
container.querySelector("button").click()

```html
<button
  class="inc"
>
  3,12
</button>
<div>
  Counts: 3,12
</div>
```

# Mutations
```
button0/#text0: "2" => "3"
button0/#text2: "11" => "12"
div1/#text1: "2" => "3"
div1/#text3: "11" => "12"
```


# Render 
container.querySelector("button").click()

```html
<button
  class="inc"
>
  4,13
</button>
<div>
  Counts: 4,13
</div>
```

# Mutations
```
button0/#text0: "3" => "4"
button0/#text2: "12" => "13"
div1/#text1: "3" => "4"
div1/#text3: "12" => "13"
```