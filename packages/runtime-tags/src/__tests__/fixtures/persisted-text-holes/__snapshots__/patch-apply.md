# Patch apply

applied: true

## Before

<script async="" type="module" src="template.marko.page.mjs"></script><div class="card"><h1>First<!--M_*1 a--></h1><p>one<!--M_*1 b--></p></div><script>(e=>(self[e]||=(l,f=e+l,s=f.length,a={},d=[],t=document,n=t.createTreeWalker(t,129))=>t=self[e][l]={i:f,d:t,l:a,v:d,x(){},w(e,l,r){for(;e=n.nextNode();)t.x(l=(l=e.data)&&!l.indexOf(f)&&(a[r=l.slice(s+1)]=e,l[s]),r,e),l>"#"&&d.push(e)}},self[e]))("M")("_");M._.w()</script>

## After

<script async="" type="module" src="template.marko.page.mjs"></script><div class="card"><h1>Second<!--M_*1 a--></h1><p>two<!--M_*1 b--></p></div><script>(e=>(self[e]||=(l,f=e+l,s=f.length,a={},d=[],t=document,n=t.createTreeWalker(t,129))=>t=self[e][l]={i:f,d:t,l:a,v:d,x(){},w(e,l,r){for(;e=n.nextNode();)t.x(l=(l=e.data)&&!l.indexOf(f)&&(a[r=l.slice(s+1)]=e,l[s]),r,e),l>"#"&&d.push(e)}},self[e]))("M")("_");M._.w()</script>
