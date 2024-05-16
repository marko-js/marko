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
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,count:0,"#childScope/0":_.c={"#scope":1,"#text/0!":_.b={"#scope":2}}},1:_.c,2:_.b},_.b._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",])
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
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,count:0,"#childScope/0":_.c={"#scope":1,"#text/0!":_.b={"#scope":2}}},1:_.c,2:_.b},_.b._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",])
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
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,count:0,"#childScope/0":_.c={"#scope":1,"#text/0!":_.b={"#scope":2}}},1:_.c,2:_.b},_.b._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",])
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
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,count:0,"#childScope/0":_.c={"#scope":1,"#text/0!":_.b={"#scope":2}}},1:_.c,2:_.b},_.b._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber",2,"packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "2" => "3"
```