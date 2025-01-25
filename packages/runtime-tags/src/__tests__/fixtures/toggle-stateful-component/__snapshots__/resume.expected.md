# Render
```html
<html>
  <head />
  <body>
    <div>
      <div>
        <button>
          0
          <!--M_*2 #text/1-->
        </button>
        <!--M_*2 #button/0-->
        <!--M_$2-->
      </div>
      <!--M_|0 #text/0 1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.c={"#childScope/0":_.b={clickCount:0}}},1:_.c,2:_.b},_.a.onCount=_.b.input_onCount=_._["__tests__/template.marko_0/onCount"](_.a),_.d),2,"__tests__/tags/counter.marko_0_input_onCount_clickCount",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_|0 #text/0 1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.c={"#childScope/0":_.b={clickCount:0}}},1:_.c,2:_.b},_.a.onCount=_.b.input_onCount=_._["__tests__/template.marko_0/onCount"](_.a),_.d),2,"__tests__/tags/counter.marko_0_input_onCount_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment after div
INSERT html/body/div/#comment
REMOVE div after html/body/div/#comment
```