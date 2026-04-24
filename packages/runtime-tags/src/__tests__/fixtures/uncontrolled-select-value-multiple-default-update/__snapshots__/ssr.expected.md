# Write
```html
  <select multiple><option></option><option value=a selected></option></select><select multiple><option></option><option value=b></option></select><select multiple><option></option><option value=b></option></select><!--M_*1 #select/2--><select multiple><option></option><option value=b></option></select><!--M_*1 #select/3--><button>Update</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<select
  multiple=""
>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<!--M_*1 #select/2-->
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<!--M_*1 #select/3-->
<button>
  Update
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT select0
INSERT select0/option0
INSERT select0/option1
INSERT select1
INSERT select1/option0
INSERT select1/option1
INSERT select2
INSERT select2/option0
INSERT select2/option1
INSERT #comment0
INSERT select3
INSERT select3/option0
INSERT select3/option1
INSERT #comment1
INSERT button
INSERT button/#text
INSERT #comment2
INSERT script
INSERT script/#text
```