// template.marko
const $template = "<h2>Releases</h2><span>Beta</span><span>Deprecated</span>";
const $walks = "b b b";
const tones = {
	neutral: "slate",
	warn: "amber"
};
function $setup($scope) {
	_attr_class($scope["#span/0"], `badge badge--${tones["neutral"]}`);
	_attr_class($scope["#span/1"], `badge badge--${tones["warn"]}`);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
