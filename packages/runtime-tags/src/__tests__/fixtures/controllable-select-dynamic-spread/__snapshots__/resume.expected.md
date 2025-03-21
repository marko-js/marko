# Render
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
      <!--M_*3 #option/0-->
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <!--M_*3 #option/1-->
      <option
        value="c"
      >
        C
      </option>
      <!--M_*3 #option/2-->
    </select>
    <!--M_|1 #text/0 2-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ControlledType:#text/0":3,"ControlledValue:#text/0":"b",tag:"select","ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"select"},2:_.b},_.a["ControlledHandler:#text/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.c),3,"__tests__/template.marko_1"];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
const select = container.querySelector(`select`);
const window = select.ownerDocument.defaultView;
select.value = "c";
select.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
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
      <!--M_*3 #option/0-->
      <option
        value="b"
      >
        B
      </option>
      <!--M_*3 #option/1-->
      <option
        selected=""
        value="c"
      >
        C
      </option>
      <!--M_*3 #option/2-->
    </select>
    <!--M_|1 #text/0 2-->
    <span>
      b
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={"ControlledType:#text/0":3,"ControlledValue:#text/0":"b",tag:"select","ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"select"},2:_.b},_.a["ControlledHandler:#text/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.c),3,"__tests__/template.marko_1"];M._.w()
    </script>
  </body>
</html>
```
