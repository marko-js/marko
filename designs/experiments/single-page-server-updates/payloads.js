const zlib = require("zlib");

// Scenario: /products/trailhead-40 -> /products/summit-65
// A1: existing fill format, patch-space ids + root-effect merge (debug accessors)
const A1_debug = `M._.r.push(_=>[1,{"#text/0":"Summit 65L Pack","#a/1":"/products/summit-65/specs",input_product_featured:!1,"D:#text/5":1,"A:#ul/6":[_(2),_(3),_(4)]},{"#LoopKey":12,"#text/1":"Hip Belt","#childScope/0":_(5),_:_(1)},{"#LoopKey":21,"#text/1":"Ice Axe Loop","#childScope/0":_(6),_:_(1)},{"#LoopKey":13,"#text/1":"Dry Sack","#childScope/0":_(7),_:_(1)},{"#text/0":"39.00"},{"#text/0":"11.50"},{"#text/0":"14.25"}],".spsu/product.marko#u 1")`;

// A1 with optimized accessors/ids (plausible prod form)
const A1_opt = `M._.r.push(_=>[1,{a:"Summit 65L Pack",b:"/products/summit-65/specs",m:!1,Df:1,Ag:[_(2),_(3),_(4)]},{M:12,b:"Hip Belt",a:_(5),_:_(1)},{M:21,b:"Ice Axe Loop",a:_(6),_:_(1)},{M:13,b:"Dry Sack",a:_(7),_:_(1)},{a:"39.00"},{a:"11.50"},{a:"14.25"}],"Nv9Xq 1")`;

// A1 + tier-2 pruning (unchanged kept items send key only)
const A1_opt_t2 = `M._.r.push(_=>[1,{a:"Summit 65L Pack",b:"/products/summit-65/specs",m:!1,Df:1,Ag:[_(2),_(3),_(4)]},{M:12},{M:21,b:"Ice Axe Loop",a:_(6),_:_(1)},{M:13}],"Nv9Xq 1")`;

// A2: nested positional structure (no ids, new serializer grouping)
const A2_opt = `M._.u.push(["Nv9Xq",["Summit 65L Pack","/products/summit-65/specs",!1,,[1],[[12,["Hip Belt",["39.00"]]],[21,["Ice Axe Loop",["11.50"]]],[13,["Dry Sack",["14.25"]]]]]])`;

// A3: value-only fills + merge-order structure stream
const A3_opt = `M._.r.push(_=>[1,{a:"Summit 65L Pack",b:"/products/summit-65/specs",m:!1},{b:"Hip Belt"},{b:"Ice Axe Loop"},{b:"Dry Sack"},{a:"39.00"},{a:"11.50"},{a:"14.25"}],["Nv9Xq",1,["b",1],["k",[12,2,5],[21,3,6],[13,4,7]]])`;

// B3-style effects (per-section instance) added to A1_opt
const B3_fx = `"Nv9Xq 1 Nv9Xq/2 2 3 4 Pt3aa 5 6 7"`;

for (const [n, s] of Object.entries({ A1_debug, A1_opt, A1_opt_t2, A2_opt, A3_opt, B3_fx }))
  console.log(n.padEnd(9), "raw:", String(Buffer.byteLength(s)).padStart(4), " gz:", zlib.gzipSync(Buffer.from(s)).length);
