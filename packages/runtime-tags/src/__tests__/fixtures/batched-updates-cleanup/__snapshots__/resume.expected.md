# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <span>
      hi
      <!--M_*2 #text/0-->
    </span>
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={show:!0,message:"hi","#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={}},2:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",0];M._.w()
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
    <button />
    <!--M_*1 #button/0-->
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={show:!0,message:"hi","#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={}},2:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment1 after span
INSERT html/body/#comment1
REMOVE span after html/body/#comment0
```