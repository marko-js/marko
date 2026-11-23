// template.marko
const $load_Second_trigger = /*@__PURE__*/ _load_trigger("_b", /*@__PURE__*/ _load_event_trigger("click", "#second"));
let $load_Second_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Second_trigger(($_) => import("./v:second.marko.setup.mjs")));
const $if_content__setup = ($scope) => $load_Second_setup($scope, $scope.b, $scope.a);
const $if = /*@__PURE__*/ _if(5, "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.g);
}));

// second.marko
const $template = "<button class=count> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}

// v:second.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
