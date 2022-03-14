# Write
  <!M^0><body><!M#0 0 0><button><!M#1 0 1>0</button></body><!M/0><script>(M$h=[]).push((b,s)=>({"0":[,,0]}),["counter",0,])</script>


# Render "End"
```html
<!--M^0-->
<html>
  <head />
  <body>
    <!--M#0 0 0-->
    <button>
      <!--M#1 0 1-->
      0
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,0]}),["counter",0,])
    </script>
  </body>
  <!--M/0-->
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
<!--M^0-->
<html>
  <head />
  <body>
    <!--M#0 0 0-->
    <button>
      <!--M#1 0 1-->
      0
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,0]}),["counter",0,])
    </script>
  </body>
  <!--M/0-->
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click();

```html
<!--M^0-->
<html>
  <head />
  <body>
    <!--M#0 0 0-->
    <button>
      <!--M#1 0 1-->
      1
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,0]}),["counter",0,])
    </script>
  </body>
  <!--M/0-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "0" => "1"
```


# Render 
container.querySelector("button").click();

```html
<!--M^0-->
<html>
  <head />
  <body>
    <!--M#0 0 0-->
    <button>
      <!--M#1 0 1-->
      2
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,0]}),["counter",0,])
    </script>
  </body>
  <!--M/0-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click();

```html
<!--M^0-->
<html>
  <head />
  <body>
    <!--M#0 0 0-->
    <button>
      <!--M#1 0 1-->
      3
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,0]}),["counter",0,])
    </script>
  </body>
  <!--M/0-->
</html>
```

# Mutations
```
#document/html1/body1/button1/#text1: "2" => "3"
```