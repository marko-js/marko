// B1: opcode tables + generic interpreter (data over code)
import { _update_tables } from "@marko/runtime-tags/dom/update";
import { $input_product_featured } from "../product.marko";
import "./price-tag.b1.js";

_update_tables(".spsu/product.marko#u", {
  0: {
    "#text/0": "t",
    "#a/1": ["a", "href"],
    input_product_featured: ["s", $input_product_featured],
    input_product_sale_percent: "v",
    "#text/5": ["b", 1],
    "#ul/6": ["k", 2, "<li> <!></li>", " D%l b"],
  },
  1: { "#text/0": "t" },
  2: {
    "#text/1": "t",
    "#childScope/0": ["c", ".spsu/tags/price-tag.marko#u"],
  },
});
