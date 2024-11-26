# Render {}
```html
<button>
  1
</button>
2 3 5
```

# Mutations
```
inserted button0, #text1, #text2, #text3, #text4, #text5
```


# Render 
container.querySelector("button").click()

```html
<button>
  2
</button>
3 4 7
```

# Mutations
```
button0/#text0: "1" => "2"
#text1: "2" => "3"
#text3: "3" => "4"
#text5: "5" => "7"
```


# Render 
container.querySelector("button").click()

```html
<button>
  3
</button>
4 5 9
```

# Mutations
```
button0/#text0: "2" => "3"
#text1: "3" => "4"
#text3: "4" => "5"
#text5: "7" => "9"
```


# Render 
container.querySelector("button").click()

```html
<button>
  4
</button>
5 6 11
```

# Mutations
```
button0/#text0: "3" => "4"
#text1: "4" => "5"
#text3: "5" => "6"
#text5: "9" => "11"
```