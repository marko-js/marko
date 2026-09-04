// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = _resume("b2", /*@__PURE__*/ _load_setup(0, 1, /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")), "_a"));

// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("a0", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
