# Render {}
```html
<html>
  <head />
  <body>
    <button>
      <!--M[2-->
      0
      <!--M*2 #text/0-->
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,clickCount:0,"#childScope/0":_.b={"#scope":1,"#text/1!":_.c={"#scope":2}}},1:_.b,2:_.c},_.b.onClick=_._["packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick"](_.a),_.c._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
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
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,clickCount:0,"#childScope/0":_.b={"#scope":1,"#text/1!":_.c={"#scope":2}}},1:_.b,2:_.c},_.b.onClick=_._["packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick"](_.a),_.c._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/button0/#text0
removed #comment after #document/html0/body1/button0/#text0
removed #text after #document/html0/body1/button0/#text0
removed #comment after #document/html0/body1/button0/#text0
#document/html0/body1/button0/#text0: " " => "1"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      2
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,clickCount:0,"#childScope/0":_.b={"#scope":1,"#text/1!":_.c={"#scope":2}}},1:_.b,2:_.c},_.b.onClick=_._["packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick"](_.a),_.c._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      3
      <!--M]1 #text/1-->
    </button>
    <!--M*1 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.d={0:_.a={"#scope":0,clickCount:0,"#childScope/0":_.b={"#scope":1,"#text/1!":_.c={"#scope":2}}},1:_.b,2:_.c},_.b.onClick=_._["packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick"](_.a),_.c._=_.a,_.d),[2,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_1_clickCount/subscriber",1,"packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
```