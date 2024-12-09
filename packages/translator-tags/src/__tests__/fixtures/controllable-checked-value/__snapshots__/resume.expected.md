# Render {}
```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="radio"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      a
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":1,"#input/1=":1,"#input/2=":1,checkedValue:"a"}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.b),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelectorAll(`input`)[1].click()

```html
<html>
  <head />
  <body>
    <input
      type="radio"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      checked=""
      type="radio"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      b
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":1,"#input/1=":1,"#input/2=":1,checkedValue:"a"}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.b),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "a" => "b"
```


# Render 
container.querySelectorAll(`input`)[2].click()

```html
<html>
  <head />
  <body>
    <input
      type="radio"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      checked=""
      type="radio"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      c
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":1,"#input/1=":1,"#input/2=":1,checkedValue:"a"}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.b),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "b" => "c"
```


# Render 
container.querySelectorAll(`input`)[0].click()

```html
<html>
  <head />
  <body>
    <input
      checked=""
      type="radio"
      value="a"
    />
    <!--M_*0 #input/0-->
    <input
      type="radio"
      value="b"
    />
    <!--M_*0 #input/1-->
    <input
      type="radio"
      value="c"
    />
    <!--M_*0 #input/2-->
    <span>
      a
      <!--M_*0 #text/3-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#input/0=":1,"#input/1=":1,"#input/2=":1,checkedValue:"a"}},_.a["#input/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange"](_.a),_.a["#input/1;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.a["#input/2;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0"](_.a),_.b),0,"packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span6/#text0: "c" => "a"
```