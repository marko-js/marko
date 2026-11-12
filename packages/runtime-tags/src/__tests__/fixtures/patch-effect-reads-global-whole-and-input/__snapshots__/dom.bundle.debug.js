// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $global_key = /*@__PURE__*/ _global_key("$global/4/5");
const $global2 = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global#4/subscribe", $global_key);
const $input_page__OR__$global = /*@__PURE__*/ _global_or(4, ($scope) => $input_page__OR__$global__script($scope), $global2);
const $input_page__OR__$global__script = _global_script(_filled_id("__tests__/template.marko_0_input_page#3_$global#4 input_page"), ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#div/0"]).textContent = g.user + ":" + $scope.input_page;
	}
}, $input_page__OR__$global);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__OR__$global);
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
