// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "#go");
const Child = /*@__PURE__*/ _load_template("a", /*@__PURE__*/ $load_Child_trigger(($_) => import("./child.mjs").then((mod) => mod.default)));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.input_label.mjs")));
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$load_Child_tag_input_label($scope.b, "tag");
};
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%/&", $if_content__setup);
const $showTag = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(3);
const $showDynamic = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f ? Child : null, ($_) => ({ label: "dynamic" })));
const $setup__script = _script("b0", ($scope) => {
	_on($scope.a, "click", function() {
		$showTag($scope, true);
	});
	_on($scope.b, "click", function() {
		$showDynamic($scope, true);
	});
});

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("a", $template, "D l", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
