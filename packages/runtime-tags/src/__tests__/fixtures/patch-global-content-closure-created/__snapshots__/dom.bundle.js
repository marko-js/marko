// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_body = /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if$1 = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_body);
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input_body = /*@__PURE__*/ _fill_const("c1", 4, $if_content__input_body);

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=b>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $body_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "b0", ($scope) => {
	_text($scope.a, $scope.$.brand);
});
const $body_content__setup = ($scope) => $body_content__$global_brand($scope);
const $body_content = _content$1("b1", "<em> </em>", "D ", $body_content__setup);
const $count = /*@__PURE__*/ _fill_let("b3", 2, ($scope) => $input_open($scope.a, $scope.c % 2 === 0));
const $setup__script$1 = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$input_body($scope.a, attrTag({ content: $body_content($scope) }));
	$setup__script$1($scope);
	$count($scope, 0);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
