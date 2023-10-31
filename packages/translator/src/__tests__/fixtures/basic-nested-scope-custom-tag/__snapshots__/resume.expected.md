# Render {}
```html
<html>
  <head />
  <body>
    <!--M[2-->
    <button>
      0
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j)=&gt;({0:h={count:0},1:{"#text/0!":j={_:h}},2:j}),[2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[2-->
    <button>
      1
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j)=&gt;({0:h={count:0},1:{"#text/0!":j={_:h}},2:j}),[2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[2-->
    <button>
      2
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j)=&gt;({0:h={count:0},1:{"#text/0!":j={_:h}},2:j}),[2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <!--M[2-->
    <button>
      3
      <!--M*2 #text/1-->
    </button>
    <!--M*2 #button/0-->
    <!--M]1 #text/0-->
    <script>
      (M$h=[]).push((b,s,h,j)=&gt;({0:h={count:0},1:{"#text/0!":j={_:h}},2:j}),[2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",2,"packages/translator/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "2" => "3"
```