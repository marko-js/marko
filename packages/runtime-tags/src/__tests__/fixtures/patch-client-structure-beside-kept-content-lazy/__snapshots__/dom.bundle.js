// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const Note = _load_template("a", ($_) => import("./note.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__T = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.h));
const $if_content__setup = $if_content__T;
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("b0", 8, ($scope) => _text($scope.a, $scope._.f), 0, "b3", 0);
const $card_content = _content$1("b1", "<em> </em>", "D ", $card_content__input_label);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $T = _let(7, $if_content__T);
const $setup__script = _script("b2", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.g);
	$T($scope, null);
}));

// note.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var note_default = /*@__PURE__*/ _template("a", $template, $walks, $setup);
