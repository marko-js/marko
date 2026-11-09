// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $for_content__l = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.l[$scope["#LoopKey"]].name), 6);
const $for_content__setup = $for_content__l;
const $wrapper_content__l = /*@__PURE__*/ _let("l/2", ($scope) => {
	$wrapper_content__l_length($scope, $scope.l?.length);
	$for_content__l($scope);
});
const $wrapper_content__for = /*@__PURE__*/ _for_to_unkeyed("#text/0", "<span> </span>", "D ", $for_content__setup);
const $wrapper_content__l_length__OR__short = /*@__PURE__*/ _or(5, ($scope) => $wrapper_content__for($scope, [$scope.short ? 0 : $scope.l_length - 1]));
const $wrapper_content__l_length = /*@__PURE__*/ _const("l_length", $wrapper_content__l_length__OR__short);
const $wrapper_content__short = /*@__PURE__*/ _let("short/4", $wrapper_content__l_length__OR__short);
const $wrapper_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$wrapper_content__short($scope, true);
	$wrapper_content__l($scope, [{ name: "z" }]);
}));
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__l($scope, [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	]);
	$wrapper_content__short($scope, false);
	$wrapper_content__setup__script($scope);
};
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><button>go</button>", "b%b ", $wrapper_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
