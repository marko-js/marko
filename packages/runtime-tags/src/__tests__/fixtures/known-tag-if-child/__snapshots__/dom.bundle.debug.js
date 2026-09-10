// components/wrapper.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/components/wrapper.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("D%l");
const $Wrapper_content__if = /*@__PURE__*/ _if("#text/0", "<b>on</b>", 0, 0, "<i>off</i>");
const $Wrapper_content__on = /*@__PURE__*/ _closure_get("on", ($scope) => $Wrapper_content__if($scope, $scope._.on ? 0 : 1));
const $Wrapper_content__setup = $Wrapper_content__on;
const $Wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Wrapper_content__setup);
const $on__closure = /*@__PURE__*/ _closure($Wrapper_content__on);
const $on = /*@__PURE__*/ _let("on/2", $on__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/1"], $Wrapper_content($scope));
	$on($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
