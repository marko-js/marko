# Render {}
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <option
        value="c"
      >
        C
      </option>
    </select>
    <!--M_*0 #select/0-->
    <span>
      b
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#select/0:":"b","#select/0=":4,value:"b"}},_.a["#select/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0/valueChange"](_.a),_.b),0,"packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
const select = container.querySelector(`select`);
  const window = select.ownerDocument.defaultView;
  select.value = "c";
  select.dispatchEvent(new window.Event("change", {
bubbles: true
  }))

```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <option
        value="c"
      >
        C
      </option>
    </select>
    <!--M_*0 #select/0-->
    <span>
      c
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={"#select/0:":"b","#select/0=":4,value:"b"}},_.a["#select/0;"]=_._["packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0/valueChange"](_.a),_.b),0,"packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/span2/#text0: "b" => "c"
```