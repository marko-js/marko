// tags/dia-d/index.marko
const $template$3 = "<em> </em>";
const $input_note$3 = ($scope, input_note) => _text($scope.a, input_note);

// tags/dia-b/index.marko
const $template$2 = $template$3;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_note$2 = ($scope, input_note) => $input_note$3($scope.a, input_note);

// tags/dia-c/index.marko
const $template$1 = $template$3;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_note$1 = ($scope, input_note) => $input_note$3($scope.a, input_note);

// tags/dia-a/index.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$2, $walks$1);
const $input_note = ($scope, input_note) => {
	$input_note$2($scope.a, input_note);
	$input_note$1($scope.b, input_note);
};

// template.marko
const $if_content__input_note = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_note($scope.a, $scope._.e)));
const $if_content__setup = $if_content__input_note;
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
