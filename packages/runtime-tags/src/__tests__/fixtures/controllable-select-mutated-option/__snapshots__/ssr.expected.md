# Write
```html
  <form><select><option value=1 selected>1<!--M_*2 #text/1--></option><!--M_*2 #option/0--><option value=2>2<!--M_*3 #text/1--></option><!--M_*3 #option/0--><option value=3>3<!--M_*4 #text/1--></option><!--M_*4 #option/0--><!--M_=1 #select/0 4 3 2--></select><button type=reset>reset</button></form><div>1<!--M_*1 #text/1--></div><button class=remove>Remove option</button><!--M_*1 #button/2--><button class=add>Add option</button><!--M_*1 #button/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.f={1:_.a={"ControlledType:#select/0":3,"ControlledValue:#select/0":1,options:[1,2,3],value:1,"LoopScopeMap:#select/0":new Map(_.b=[[1,_.c={}],[2,_.d={}],[3,_.e={}]])},2:_.c,3:_.d,4:_.e},_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.f),1,"__tests__/template.marko_0_options",1,"__tests__/template.marko_0"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <form>
      <select>
        <option
          selected=""
          value="1"
        >
          1
          <!--M_*2 #text/1-->
        </option>
        <!--M_*2 #option/0-->
        <option
          value="2"
        >
          2
          <!--M_*3 #text/1-->
        </option>
        <!--M_*3 #option/0-->
        <option
          value="3"
        >
          3
          <!--M_*4 #text/1-->
        </option>
        <!--M_*4 #option/0-->
        <!--M_=1 #select/0 4 3 2-->
      </select>
      <button
        type="reset"
      >
        reset
      </button>
    </form>
    <div>
      1
      <!--M_*1 #text/1-->
    </div>
    <button
      class="remove"
    >
      Remove option
    </button>
    <!--M_*1 #button/2-->
    <button
      class="add"
    >
      Add option
    </button>
    <!--M_*1 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f={1:_.a={"ControlledType:#select/0":3,"ControlledValue:#select/0":1,options:[1,2,3],value:1,"LoopScopeMap:#select/0":new Map(_.b=[[1,_.c={}],[2,_.d={}],[3,_.e={}]])},2:_.c,3:_.d,4:_.e},_.a["ControlledHandler:#select/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.f),1,"__tests__/template.marko_0_options",1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/form
INSERT html/body/form/select
INSERT html/body/form/select/option0
INSERT html/body/form/select/option0/#text
INSERT html/body/form/select/option0/#comment
INSERT html/body/form/select/#comment0
INSERT html/body/form/select/option1
INSERT html/body/form/select/option1/#text
INSERT html/body/form/select/option1/#comment
INSERT html/body/form/select/#comment1
INSERT html/body/form/select/option2
INSERT html/body/form/select/option2/#text
INSERT html/body/form/select/option2/#comment
INSERT html/body/form/select/#comment2
INSERT html/body/form/select/#comment3
INSERT html/body/form/button
INSERT html/body/form/button/#text
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```