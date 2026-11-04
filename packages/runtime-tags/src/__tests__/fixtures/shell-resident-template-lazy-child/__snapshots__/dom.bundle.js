// counter.marko
const $template$1 = "<b> </b>";
const $walks$1 = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var counter_default = /*@__PURE__*/ _template("a", $template$1, "D l", 0, $input$1);

// other.marko
const $template = "<i> </i><!><!>";
const $walks = "D l%/&c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $input_label = ($scope, input_label) => {
	_text($scope.a, input_label);
	$load_Lazy_tag_input_label($scope.c, input_label);
};
function $setup($scope) {
	$load_Lazy_setup($scope, $scope.c, $scope.b);
}
const $input = ($scope, input) => $input_label($scope, input.label);
var other_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);

// tags/chooser.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_Tag__OR__input_label = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.e, ($_) => ({ label: $scope._.f })));
const $if_content__input_Tag = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_Tag__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_Tag._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_Tag__OR__input_label);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("e0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.g);
}));

// v:counter.marko.register-default.js
_resumed.a = counter_default;

// v:other.marko.register-default.js
_resumed.c = other_default;

// lazy.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
