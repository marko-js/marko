# Render
```html
<html>
  <head />
  <body>
    <div>
      Hello
    </div>
    <!--M_*2 #div/0-->
    <button
      foo="1"
    >
      Hello
    </button>
    <!--M_*2 #button/1-->
    <span>
      Overridden
    </span>
    <!--M_*2 #span/2-->
    <output />
    <!--M_*2 #output/3-->
    <strong>
      Custom content
    </strong>
    <!--M_*2 #strong/4-->
    <p>
      Hello
    </p>
    <!--M_*2 #p/5-->
    <em>
      Custom content
    </em>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.g=[0,1,_.b={"ConditionalScope:#div/0":_.c={},"ConditionalRenderer:#div/0":"__tests__/template.marko_1_renderer","ConditionalScope:#button/1":_.d={},"ConditionalRenderer:#button/1":"__tests__/template.marko_1_renderer","ConditionalScope:#strong/4":_.e={},"ConditionalRenderer:#strong/4":"__tests__/tags/my-div.marko_1_renderer","ConditionalScope:#p/5":_.f={},"ConditionalRenderer:#p/5":"__tests__/template.marko_1_renderer",input:{content:_._["__tests__/template.marko_1_renderer"](_.a={})}},_.c,_.d,1,_.e,_.f],_.b.CustomContent_content=_._["__tests__/tags/my-div.marko_1_renderer"](_.b),_.g),"__tests__/tags/my-div.marko_0_input_CustomContent_content",2,"__tests__/tags/my-div.marko_0_input",2];M._.w()
    </script>
  </body>
</html>
```
