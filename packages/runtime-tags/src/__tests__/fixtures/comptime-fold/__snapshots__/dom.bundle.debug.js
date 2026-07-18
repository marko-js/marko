// template.marko
const $template = "<h1>Marko at 20</h1><p>no tagline yet</p><p>none</p><p> </p><button>mark seen</button>";
const $walks = "dD l b";
const site = {
	name: "Marko",
	tagline: undefined,
	counts: [
		10,
		20,
		30
	],
	nested: { deep: null }
};
const flags = { seen: false };
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	flags.seen = true;
}));
function $setup($scope) {
	_text($scope["#text/0"], site.counts.join("/"));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
