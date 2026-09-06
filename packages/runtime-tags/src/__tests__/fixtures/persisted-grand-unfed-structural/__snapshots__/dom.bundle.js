// tags/badge/index.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $if$1 = /*@__PURE__*/ _if(0, "<em>on</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input_text = ($scope, input_text) => _text($scope.b, input_text);

// tags/wrap/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<div class=wrap>${_w0}</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $input_label = ($scope, input_label) => $input_text($scope.a, input_label);
function $setup($scope) {
	$input_open($scope.a);
}

// template.marko
const $if_content__input_a = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
