// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $global_meta_key = /*@__PURE__*/ _global_key("meta");
const $global_meta = /*@__PURE__*/ _global_closure($global_meta_key, "__tests__/template.marko_0_$global_meta#4/subscribe", ($scope) => _text($scope["#text/0"], JSON.stringify($scope.$global.meta)));
function $setup($scope) {
	$global_meta_title_length__script($scope);
	$global_meta($scope);
}
const $global_meta_title_length_key = /*@__PURE__*/ _global_key("meta", "title", "length");
const $global_meta_title_length = /*@__PURE__*/ _global_closure($global_meta_title_length_key);
const $global_meta_title_length__script = _global_script("__tests__/template.marko_0_$global_meta_title_length#6", ($scope) => document.body.dataset.flag = String($scope.$global.meta.title.length), $global_meta_title_length);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
