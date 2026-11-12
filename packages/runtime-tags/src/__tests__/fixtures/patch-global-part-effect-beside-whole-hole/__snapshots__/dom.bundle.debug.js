// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $global_meta = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_meta#4/subscribe", ($scope) => _text($scope["#text/0"], JSON.stringify($scope.$global.meta)), "meta");
const $global_meta_title_length__script = _fill_global_path_script("__tests__/template.marko_0_$global_meta_title_length#6", ($scope) => document.body.dataset.flag = String($scope.$global.meta.title.length), "meta", "title", "length");
const $global_meta_title_length = $global_meta_title_length__script;
function $setup($scope) {
	$global_meta_title_length($scope);
	$global_meta($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
