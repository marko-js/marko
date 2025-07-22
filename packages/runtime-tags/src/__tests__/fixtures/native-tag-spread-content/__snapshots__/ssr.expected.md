# Write
```html
  <div>Hello</div><!--M_*2 #div/0--><button foo=1>Hello</button><!--M_*2 #button/1--><span>Overridden</span><!--M_*2 #span/2--><output></output><!--M_*2 #output/3--><strong>Custom content</strong><!--M_*2 #strong/4--><p>Hello</p><!--M_*2 #p/5--><em>Custom content</em><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,1,_.b={input:{content:_._["__tests__/template.marko_1_renderer"](_.a={})}}],_.b.CustomContent_content=_._["__tests__/tags/my-div.marko_1_renderer"](_.b),_.c),"__tests__/tags/my-div.marko_0_input_CustomContent_content",2,"__tests__/tags/my-div.marko_0_input",2];M._.w()</script>
```

# Render End
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,1,_.b={input:{content:_._["__tests__/template.marko_1_renderer"](_.a={})}}],_.b.CustomContent_content=_._["__tests__/tags/my-div.marko_1_renderer"](_.b),_.c),"__tests__/tags/my-div.marko_0_input_CustomContent_content",2,"__tests__/tags/my-div.marko_0_input",2];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment1
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/#comment2
INSERT html/body/output
INSERT html/body/#comment3
INSERT html/body/strong
INSERT html/body/strong/#text
INSERT html/body/#comment4
INSERT html/body/p
INSERT html/body/p/#text
INSERT html/body/#comment5
INSERT html/body/em
INSERT html/body/em/#text
INSERT html/body/script
INSERT html/body/script/#text
```