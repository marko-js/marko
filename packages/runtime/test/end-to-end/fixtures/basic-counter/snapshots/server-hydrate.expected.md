# Write
  <body><!M$0><div><!#>10</div><!#><button>increment</button><!M$0/></body><script>M$c=(window.M$c||[]).concat([[0,"counter",{"start":10}]])</script>


# Render "Flush"
```html
<html>
  <head />
  <body>
    <!--M$0-->
    <div>
      <!--#-->
      10
    </div>
    <!--#-->
    <button>
      increment
    </button>
    <!--M$0/-->
    <script>
      M$c=(window.M$c||[]).concat([[0,"counter",{"start":10}]])
    </script>
  </body>
</html>
```

# Mutations
```
inserted html0
inserted html0/head0
inserted html0/body1
inserted html0/body1/#comment0
inserted html0/body1/div1
inserted html0/body1/div1/#comment0
inserted html0/body1/div1/#text1
inserted html0/body1/#comment2
inserted html0/body1/button3
inserted html0/body1/button3/#text0
inserted html0/body1/#comment4
inserted html0/body1/script5
inserted html0/body1/script5/#text0
```


# Render "End"
```html
<html>
  <head />
  <body>
    <!--M$0-->
    <div>
      <!--#-->
      10
    </div>
    <!--#-->
    <button>
      increment
    </button>
    <!--M$0/-->
    <script />
  </body>
</html>
```

# Mutations
```
removed #text in html0/body1/script5
```


# Render "Hydrate"
```html
<html>
  <head />
  <body>
    <div>
      10
    </div>
    <button>
      increment
    </button>
    <script />
  </body>
</html>
```

# Mutations
```
removed #comment before html0/body1/div0/#text0
removed #comment after html0/body1/div0
html0/body1/div0/#text0: "10" => "10"
removed #comment before html0/body1/div0
removed #comment after html0/body1/button1
```


# Render 
(container) => container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      11
    </div>
    <button>
      increment
    </button>
    <script />
  </body>
</html>
```

# Mutations
```
html0/body1/div0/#text0: "10" => "11"
```