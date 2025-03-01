# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <div
      class="child0 child1"
    >
      Hello World
    </div>
    <!--M_*3 #div/0-->
    <!--M_|2 #text/0 3-->
    <!--M_|1 #text/0 2-->
    <hr />
    <div>
      Hello World
    </div>
    <!--M_*6 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.g={1:_.a={input_show:!0,"#text/0(":0,"#text/0!":_.b={"#text/0(":0,"#text/0!":_.d={}},"#childScope/1":_.e={input:_.c={}},"#text/2!":_.f={}},2:_.b,3:_.d,4:{input:{value:_._["__tests__/template.marko_2/#div"](_.d)}},5:_.e,6:_.f},_.b._=_.a,_.c.value=_._["__tests__/template.marko_0/_hoisted_el"](_.a),_.g),4,"__tests__/tags/child.marko_0_input",5,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
UPDATE html/body/div0[class] null => "child0 child1"
UPDATE html/body/div0[class] "child0" => "child0 child1"
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```