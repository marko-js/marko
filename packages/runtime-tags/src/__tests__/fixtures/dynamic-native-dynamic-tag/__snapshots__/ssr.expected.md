# Write
```html
  <span class=A><!--M_[-->body content<!--M_]2 #span/0 3--></span><!--M_'1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},{"ConditionalRenderer:#span/0":"__tests__/template.marko_1_content"}]),"__tests__/template.marko_0_tagName 1"];M._.w()</script>
```

# Render End
```html
<span
  class="A"
>
  <!--M_[-->
  body content
  <!--M_]2 #span/0 3-->
</span>
<!--M_'1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "span",
      tagName: "span",
      className: "A"
    },
    {
      "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content"
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT span
INSERT span/#comment0
INSERT span/#text
INSERT span/#comment1
INSERT #comment0
INSERT button
INSERT #comment1
INSERT script
INSERT script/#text
```