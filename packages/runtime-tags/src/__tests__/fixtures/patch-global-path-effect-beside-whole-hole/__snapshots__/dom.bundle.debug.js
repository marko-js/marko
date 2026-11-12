// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $global_meta_key = /*@__PURE__*/ _global_key("$global_meta/2", "meta");
const $global_meta = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_meta#4/subscribe", $global_meta_key, ($scope) => _text($scope["#text/0"], JSON.stringify($scope.$global.meta)));
const $global_meta_title_length_key = /*@__PURE__*/ _global_key("$global_meta_title_length/4", "meta", "title", "length");
const $global_meta_title_length__script = _script("__tests__/template.marko_0_$global_meta_title_length#6", ($scope) => {
	$global_meta_title_length.r($scope);
	document.body.dataset.flag = String($scope.$global.meta.title.length);
});
const $global_meta_title_length = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_meta_title_length#6/subscribe", $global_meta_title_length_key, $global_meta_title_length__script);
function $setup($scope) {
	$global_meta_title_length($scope);
	$global_meta($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
