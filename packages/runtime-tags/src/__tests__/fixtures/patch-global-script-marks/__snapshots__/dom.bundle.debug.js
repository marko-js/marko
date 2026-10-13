// template.marko
const $template = "<main><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><h1> </h1></main>";
const $walks = "E lD lD lD lD lD lD lD lD lD lD lD lD lD m";
const $input_v = ($scope, input_v1) => {
	_text($scope["#text/0"], input_v1);
	_text($scope["#text/12"], input_v1);
};
const $input_v2 = ($scope, input_v2) => _text($scope["#text/1"], input_v2);
const $input_v3 = ($scope, input_v3) => _text($scope["#text/2"], input_v3);
const $input_v4 = ($scope, input_v4) => _text($scope["#text/3"], input_v4);
const $input_v5 = ($scope, input_v5) => _text($scope["#text/4"], input_v5);
const $input_v6 = ($scope, input_v6) => _text($scope["#text/5"], input_v6);
const $input_v7 = ($scope, input_v7) => _text($scope["#text/6"], input_v7);
const $input_v8 = ($scope, input_v8) => _text($scope["#text/7"], input_v8);
const $input_v9 = ($scope, input_v9) => _text($scope["#text/8"], input_v9);
const $input_v10 = ($scope, input_v10) => _text($scope["#text/9"], input_v10);
const $input_v11 = ($scope, input_v11) => _text($scope["#text/10"], input_v11);
const $input_v12 = ($scope, input_v12) => _text($scope["#text/11"], input_v12);
const $global_brand__script = _fill_global_script("__tests__/template.marko_0_$global_brand#30", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$global.brand + "]";
	}
});
_fill_global_join_resume("brand", "__tests__/template.marko_0_$global_brand#30/global", $global_brand__script);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#30/global", ($scope) => {
	$global_brand__script($scope);
	_text($scope["#text/13"], $scope.$global.brand);
});
const $input_label__script = _script("__tests__/template.marko_0_input_label#28", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.input_label + ")";
	}
});
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__script);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_v($scope, input.v1);
	$input_v2($scope, input.v2);
	$input_v3($scope, input.v3);
	$input_v4($scope, input.v4);
	$input_v5($scope, input.v5);
	$input_v6($scope, input.v6);
	$input_v7($scope, input.v7);
	$input_v8($scope, input.v8);
	$input_v9($scope, input.v9);
	$input_v10($scope, input.v10);
	$input_v11($scope, input.v11);
	$input_v12($scope, input.v12);
};
function $setup($scope) {
	$global_brand($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
