// components/wrapper.marko
const $template = "<section></section>";
let $load_Child_setup = _resume("c2", /*@__PURE__*/ _load_ready("_b", 1, /*@__PURE__*/ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"))));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__input_label$1 = /*@__PURE__*/ _fill_join("c0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $load_Child_tag_input_label($scope.b, $scope._.e)));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_label$1._($scope);
	$load_Child_setup($scope);
};
const $if$1 = /*@__PURE__*/ _if(0, "<!><!><!>", "b%/&", $if_content__setup$1);
const $input_show = ($scope, input_show) => $if$1($scope, input_show ? 0 : 1);
const $input_label = /*@__PURE__*/ _fill_const("c0", 4, $if_content__input_label$1);

// template.marko
const $if_content__input_show = /*@__PURE__*/ _fill_join("a0", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_show($scope.a, $scope._.d)));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.e)));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)(" b"), $if_content__setup);
const $mounted = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => $mounted($scope, true));

// components/child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// components/v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
