# Render {}
```html
<!--M#0 0-->
<html>
  <head />
  <body>
    <button>
      <!--M#0 1-->
      0
    </button>
    used to be 
    <span>
      <!--M#0 2-->
      0
    </span>
     which should be the same as 
    <span>
      <!--M#0 3-->
      0
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{4:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
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
      1
    </button>
    used to be 
    <span>
      <!--M#0 2-->
      0
    </span>
     which should be the same as 
    <span>
      <!--M#0 3-->
      0
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{4:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/button0/#text1: "0" => "1"
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
    used to be 
    <span>
      <!--M#0 2-->
      1
    </span>
     which should be the same as 
    <span>
      <!--M#0 3-->
      1
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{4:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/button0/#text1: "1" => "2"
#document/html1/body1/span2/#text1: "0" => "1"
#document/html1/body1/span4/#text1: "0" => "1"
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
      3
    </button>
    used to be 
    <span>
      <!--M#0 2-->
      2
    </span>
     which should be the same as 
    <span>
      <!--M#0 3-->
      2
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{4:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/button0/#text1: "2" => "3"
#document/html1/body1/span2/#text1: "1" => "2"
#document/html1/body1/span4/#text1: "1" => "2"
```