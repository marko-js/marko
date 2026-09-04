// tags/badge.marko
const $template = "<b class=badge> </b>";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// tags/card.marko
const $open = /*@__PURE__*/ _fill_let("c0", 8, ($scope) => _text($scope.d, $scope.i ? "hide" : "show"));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_title = ($scope, input_title) => _text($scope.a, input_title);
const $input_note = ($scope, input_note) => _text($scope.b, input_note);

// template.marko
const $if_content__input_badge_label = /*@__PURE__*/ _fill_join("a1", 9, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.j)));
const $if_content__setup = $if_content__input_badge_label;
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_props__OR__on = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _or(8, ($scope) => {
	const $card_input_spread = {
		...$scope.g,
		note: $scope.h ? "on" : "off"
	};
	$input_title($scope.b, $card_input_spread.title);
	$input_note($scope.b, $card_input_spread.note);
}));
const $on = /*@__PURE__*/ _let(7, ($scope) => {
	$if($scope, $scope.h ? 0 : 1);
	$input_props__OR__on($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$on($scope, !$scope.h);
}));
const $input_props = _fill_const("a0", 6, $input_props__OR__on);
