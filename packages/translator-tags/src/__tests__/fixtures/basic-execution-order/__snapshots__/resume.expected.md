# Render {}
```html
<html>
  <head />
  <body>
    <button>
      hide
    </button>
    <!--M*0 #button/0-->
    hi
    <!--M*1 #text/0-->
    <!--M|0 #text/1 1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={message:{text:"hi"},"#text/1!":_.b={}},1:_.b},_.a["#text/1("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0",])
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
      hide
    </button>
    <!--M*0 #button/0-->
    <!--M|0 #text/1 1-->
    <!--M*1 #text/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={0:_.a={message:{text:"hi"},"#text/1!":_.b={}},1:_.b},_.a["#text/1("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer"](_.a),_.b._=_.a,_.c),[0,"packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment2 after #document/html0/body1/#comment3
inserted #document/html0/body1/#comment2
removed #text after #document/html0/body1/#comment2
```