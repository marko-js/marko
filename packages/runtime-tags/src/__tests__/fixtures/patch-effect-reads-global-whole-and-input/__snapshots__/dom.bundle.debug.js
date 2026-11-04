// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $input_page__$global__script = _fill_global_script(_filled_id("__tests__/template.marko_0_input_page#3_$global#4 input_page"), ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#div/0"]).textContent = g.user + ":" + $scope.input_page;
	}
}, "");
const $input_page__$global = $input_page__$global__script;
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__$global);
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
