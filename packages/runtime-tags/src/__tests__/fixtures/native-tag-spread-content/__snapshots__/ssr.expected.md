# Write
```html
  <div>Hello</div><!--M_*2 #div/0--><button foo=1>Hello</button><!--M_*2 #button/1--><span>Overridden</span><!--M_*2 #span/2--><output></output><!--M_*2 #output/3--><strong>Custom content</strong><!--M_*2 #strong/4--><p>Hello</p><!--M_*2 #p/5--><em>Custom content</em><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.h=[0,1,_.c={"BranchScopes:#div/0":_.d={},"ConditionalRenderer:#div/0":_.a="__tests__/template.marko_1_content","BranchScopes:#button/1":_.e={},"ConditionalRenderer:#button/1":_.a,"BranchScopes:#strong/4":_.f={},"ConditionalRenderer:#strong/4":"__tests__/tags/my-div.marko_1_content","BranchScopes:#p/5":_.g={},"ConditionalRenderer:#p/5":_.a,input:_.b={content:_.i={}}},_.d,_.e,1,_.f,_.g],_.b.content=_._["__tests__/template.marko_1_content"](_.i),_.c.CustomContent_content=_._["__tests__/tags/my-div.marko_1_content"](_.c),_.h),"__tests__/tags/my-div.marko_0_input_CustomContent_content 2 __tests__/tags/my-div.marko_0_input 2"];M._.w()</script>
```

# Render End
```html
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
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.h = [0, 1, _.c = {
      "BranchScopes:#div/0": _.d = {},
      "ConditionalRenderer:#div/0": _.a =
        "__tests__/template.marko_1_content",
      "BranchScopes:#button/1": _.e = {},
      "ConditionalRenderer:#button/1": _.a,
      "BranchScopes:#strong/4": _.f = {},
      "ConditionalRenderer:#strong/4": "__tests__/tags/my-div.marko_1_content",
      "BranchScopes:#p/5": _.g = {},
      "ConditionalRenderer:#p/5": _.a,
      input: _.b = {
        content: _.i = {}
      }
    }, _.d, _.e, 1, _.f, _.g], _.b.content = _._[
      "__tests__/template.marko_1_content"
      ](_.i), _.c.CustomContent_content = _._[
      "__tests__/tags/my-div.marko_1_content"
      ](_.c), _.h),
    "__tests__/tags/my-div.marko_0_input_CustomContent_content 2 __tests__/tags/my-div.marko_0_input 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/#text
INSERT #comment0
INSERT button
INSERT button/#text
INSERT #comment1
INSERT span
INSERT span/#text
INSERT #comment2
INSERT output
INSERT #comment3
INSERT strong
INSERT strong/#text
INSERT #comment4
INSERT p
INSERT p/#text
INSERT #comment5
INSERT em
INSERT em/#text
INSERT script
INSERT script/#text
```