// template.marko
const $template = "<div></div>";
const $walks = " b";
const $global_key = /*@__PURE__*/ _global_key("$global/4/5");
const $global2 = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global#4/subscribe", $global_key);
const $input_page__OR__$global__script = _script_patch("__tests__/template.marko_0_input_page#3_$global#4 input_page", ($scope) => {
	$input_page__OR__$global.r($scope);
	{
		const g = $scope.$global;
		_el_read($scope["#div/0"]).textContent = g.user + ":" + $scope.input_page;
	}
});
const $input_page__OR__$global = /*@__PURE__*/ _global_or(4, $input_page__OR__$global__script, $global2);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__$global);
const $setup = $global2;
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
