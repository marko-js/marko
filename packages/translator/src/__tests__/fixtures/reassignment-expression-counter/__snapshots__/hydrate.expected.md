# Render {}
```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      <!--M#0 1-->
      0
    </button>
    <!--M#0 2-->
    <button
      id="triple"
    >
      <!--M#0 3-->
      0
    </button>
    <!--M#0 4-->
    <button
      id="cube"
    >
      <!--M#0 5-->
      0
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{6:0}}),[0,"packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#addTwo").click();

```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      <!--M#0 1-->
      2
    </button>
    <!--M#0 2-->
    <button
      id="triple"
    >
      <!--M#0 3-->
      2
    </button>
    <!--M#0 4-->
    <button
      id="cube"
    >
      <!--M#0 5-->
      2
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{6:0}}),[0,"packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/button0/#text1: "0" => "2"
#document/html1/body1/button2/#text1: "0" => "2"
#document/html1/body1/button4/#text1: "0" => "2"
```


# Render 
container.querySelector("#triple").click();

```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      <!--M#0 1-->
      6
    </button>
    <!--M#0 2-->
    <button
      id="triple"
    >
      <!--M#0 3-->
      6
    </button>
    <!--M#0 4-->
    <button
      id="cube"
    >
      <!--M#0 5-->
      6
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{6:0}}),[0,"packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/button0/#text1: "2" => "6"
#document/html1/body1/button2/#text1: "2" => "6"
#document/html1/body1/button4/#text1: "2" => "6"
```


# Render 
container.querySelector("#cube").click();

```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button
      id="addTwo"
    >
      <!--M#0 1-->
      216
    </button>
    <!--M#0 2-->
    <button
      id="triple"
    >
      <!--M#0 3-->
      216
    </button>
    <!--M#0 4-->
    <button
      id="cube"
    >
      <!--M#0 5-->
      216
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{6:0}}),[0,"packages/translator/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/button0/#text1: "6" => "216"
#document/html1/body1/button2/#text1: "6" => "216"
#document/html1/body1/button4/#text1: "6" => "216"
```