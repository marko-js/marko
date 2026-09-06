// template.marko
const $template = "<main><!><em> </em></main>";
const $walks = "D%bD m";
const $if_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#5", ($scope) => _attrs_script($scope, "#a/0"));
const $if_content__input_attrs = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs($scope, "#a/0", {
		...$scope._.input_attrs,
		onClick: $onClick($scope)
	});
	$if_content__input_attrs__script($scope);
});
const $if_content__setup = $if_content__input_attrs;
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<a>go</a>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_attrs($scope, input.attrs);
};
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $if_content__input_attrs);
const $onClick = ($scope) => function() {
	$count($scope._, +$scope._.count + 1);
};
_resume("__tests__/template.marko_1/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
