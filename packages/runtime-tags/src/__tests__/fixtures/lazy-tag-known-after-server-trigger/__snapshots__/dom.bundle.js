// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("_a", /*@__PURE__*/ _load_event_trigger("click", "#go"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.input_label.mjs")));
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$load_Child_tag_input_label($scope.b, "tag");
};
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.e);
}));

// child.marko
const $template = "<span> </span>";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
