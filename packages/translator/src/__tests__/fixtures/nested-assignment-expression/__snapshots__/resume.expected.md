# Render {}
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M#0 #text/1-->
    </button>
    <!--M#0 #button/0-->
    used to be 
    <span>
      0
      <!--M#0 #text/2-->
    </span>
     which should be the same as 
    <span>
      0
      <!--M#0 #text/3-->
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{clickCount:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      1
      <!--M#0 #text/1-->
    </button>
    <!--M#0 #button/0-->
    used to be 
    <span>
      0
      <!--M#0 #text/2-->
    </span>
     which should be the same as 
    <span>
      0
      <!--M#0 #text/3-->
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{clickCount:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M#0 #text/1-->
    </button>
    <!--M#0 #button/0-->
    used to be 
    <span>
      1
      <!--M#0 #text/2-->
    </span>
     which should be the same as 
    <span>
      1
      <!--M#0 #text/3-->
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{clickCount:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/span3/#text0: "0" => "1"
#document/html0/body1/span5/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M#0 #text/1-->
    </button>
    <!--M#0 #button/0-->
    used to be 
    <span>
      2
      <!--M#0 #text/2-->
    </span>
     which should be the same as 
    <span>
      2
      <!--M#0 #text/3-->
    </span>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{clickCount:0}}),[0,"packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/span3/#text0: "1" => "2"
#document/html0/body1/span5/#text0: "1" => "2"
```