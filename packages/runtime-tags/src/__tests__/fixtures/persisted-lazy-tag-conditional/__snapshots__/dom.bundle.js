// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = _resume("b3", /*@__PURE__*/ _load_setup(0, 1, /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")), "_a"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_label.mjs")));
const $if_content__input_label = _init_if_closure("b2", 0, 0, ($scope) => $load_Child_tag_input_label($scope.b, $scope._.e));

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
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
