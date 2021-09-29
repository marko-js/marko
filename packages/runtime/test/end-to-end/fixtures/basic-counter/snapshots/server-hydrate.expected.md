# Write
  <!M^ROOT><body><!M#3 ROOT 3><button><!M#1 ROOT 4>0</button></body><!M/ROOT><script>M$h=(window.M$h||[]).concat([["counter",["ROOT",null,null,null,null,0],3]])</script>


# Render "End"
```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    <!--M#3 ROOT 3-->
    <button>
      <!--M#1 ROOT 4-->
      0
    </button>
    <script>
      M$h=(window.M$h||[]).concat([["counter",["ROOT",null,null,null,null,0],3]])
    </script>
  </body>
  <!--M/ROOT-->
</html>
```

# Mutations
```
inserted #document/#comment0
inserted #document/html1
inserted #document/html1/head0
inserted #document/html1/body1
inserted #document/html1/body1/#comment0
inserted #document/html1/body1/button1
inserted #document/html1/body1/button1/#comment0
inserted #document/html1/body1/button1/#text1
inserted #document/html1/#comment2
inserted #document/html1/body1/script2
inserted #document/html1/body1/script2/#text0
```


# Render "Hydrate"
```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    <!--M#3 ROOT 3-->
    <button>
      <!--M#1 ROOT 4-->
      0
    </button>
    <script>
      M$h=(window.M$h||[]).concat([["counter",["ROOT",null,null,null,null,0],3]])
    </script>
  </body>
  <!--M/ROOT-->
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click();

```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    <!--M#3 ROOT 3-->
    <button>
      <!--M#1 ROOT 4-->
      1
    </button>
    <script>
      M$h=(window.M$h||[]).concat([["counter",["ROOT",null,null,null,null,0],3]])
    </script>
  </body>
  <!--M/ROOT-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "0" => "1"
```


# Render 
container.querySelector("button").click();

```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    <!--M#3 ROOT 3-->
    <button>
      <!--M#1 ROOT 4-->
      2
    </button>
    <script>
      M$h=(window.M$h||[]).concat([["counter",["ROOT",null,null,null,null,0],3]])
    </script>
  </body>
  <!--M/ROOT-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click();

```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    <!--M#3 ROOT 3-->
    <button>
      <!--M#1 ROOT 4-->
      3
    </button>
    <script>
      M$h=(window.M$h||[]).concat([["counter",["ROOT",null,null,null,null,0],3]])
    </script>
  </body>
  <!--M/ROOT-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "2" => "3"
```