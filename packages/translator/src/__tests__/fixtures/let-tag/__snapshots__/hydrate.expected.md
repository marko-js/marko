# Render {}
```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button>
      <!--M#0 1-->
      1
    </button>
    <!--M#0 2-->
    1
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:1,4:1}}),[0,"packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click();

```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button>
      <!--M#0 1-->
      2
    </button>
    <!--M#0 2-->
    2
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:1,4:1}}),[0,"packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/#text2: "1" => "2"
#document/html1/body1/button0/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click();

```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button>
      <!--M#0 1-->
      4
    </button>
    <!--M#0 2-->
    4
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:1,4:1}}),[0,"packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/#text2: "2" => "4"
#document/html1/body1/button0/#text1: "2" => "4"
```


# Render 
container.querySelector("button").click();

```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button>
      <!--M#0 1-->
      8
    </button>
    <!--M#0 2-->
    8
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:1,4:1}}),[0,"packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/#text2: "4" => "8"
#document/html1/body1/button0/#text1: "4" => "8"
```