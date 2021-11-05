# Write
  <!M^ROOT><body><!M#6 ROOT 6><button><!M#1 ROOT 7>0</button></body><!M/ROOT><script>(M$h=[]).push({"ROOT":["ROOT",null,null,null,null,null,null,null,0]},["counter",6,"ROOT",])</script>


# Render "End"
```html
<!--M^ROOT-->
<html>
  <head />
  <body>
    <!--M#6 ROOT 6-->
    <button>
      <!--M#1 ROOT 7-->
      0
    </button>
    <script>
      (M$h=[]).push({"ROOT":["ROOT",null,null,null,null,null,null,null,0]},["counter",6,"ROOT",])
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
    <!--M#6 ROOT 6-->
    <button>
      <!--M#1 ROOT 7-->
      0
    </button>
    <script>
      (M$h=[]).push({"ROOT":["ROOT",null,null,null,null,null,null,null,0]},["counter",6,"ROOT",])
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
    <!--M#6 ROOT 6-->
    <button>
      <!--M#1 ROOT 7-->
      1
    </button>
    <script>
      (M$h=[]).push({"ROOT":["ROOT",null,null,null,null,null,null,null,0]},["counter",6,"ROOT",])
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
    <!--M#6 ROOT 6-->
    <button>
      <!--M#1 ROOT 7-->
      2
    </button>
    <script>
      (M$h=[]).push({"ROOT":["ROOT",null,null,null,null,null,null,null,0]},["counter",6,"ROOT",])
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
    <!--M#6 ROOT 6-->
    <button>
      <!--M#1 ROOT 7-->
      3
    </button>
    <script>
      (M$h=[]).push({"ROOT":["ROOT",null,null,null,null,null,null,null,0]},["counter",6,"ROOT",])
    </script>
  </body>
  <!--M/ROOT-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "2" => "3"
```