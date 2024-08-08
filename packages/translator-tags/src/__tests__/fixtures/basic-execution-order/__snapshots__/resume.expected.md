# Render {}
```html
<html>
  <head />
  <body>
    <button>
      hide
    </button>
    <!--M_*0 #button/0-->
    hi
    <!--M_*1 #text/0-->
    <!--M_|0 #text/1 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={message:{text:"hi"},"#text/1!":_.b={}},1:_.b},_.a["#text/1("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer"](_.a),_.b._=_.a,_.c)];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0"];M._.d=1;M._.w()
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
    <!--M_*0 #button/0-->
    <!--M_|0 #text/1 1-->
    <!--M_*1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.c={0:_.a={message:{text:"hi"},"#text/1!":_.b={}},1:_.b},_.a["#text/1("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer"](_.a),_.b._=_.a,_.c)];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0"];M._.d=1;M._.w()
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