// template.marko
const $template = "<h1>Field Notes &lt;em>uncut&lt;/em></h1><section><h2>Soil &amp; water</h2><p>pH &lt; 6.5 &amp;&amp; \"rich\" loam > 'sand'</p></section><section><h2>Pests</h2><p>&lt;script>alert('aphids')&lt;/script></p></section><p>audited true rev 7</p><p>meta <!></p>";
const $walks = "eDb%l";
function $setup($scope) {
	_text($scope["#text/0"], JSON.stringify({
		__proto__: null,
		["__proto__"]: {
			__proto__: null,
			note: "just data"
		},
		constructor: "also data",
		revision: 7
	}));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
