// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// template.marko
const $Inner_content__walks = "b%/&c";
const $Inner_content__template = "<!><!><!>";
const $LazyBody_content__walks = "b%/&c";
const $LazyBody_content__template = "<!><!><!>";
const $ChildBody_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks);
const $ChildBody_content__template = $template;
const $OwnBody_content__walks = " Db%l";
const $OwnBody_content__template = "<button>own:<!></button>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
let $load_LazyChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy-child.marko.setup.mjs"));
let $load_LazyChild_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:lazy-child.marko.input_label.mjs"), "_b");
const $Outer_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Inner_content__setup($scope.a);
};
const $OwnBody_content__count = /*@__PURE__*/ _fill_let("c8", 2, ($scope) => _text($scope.b, $scope.c));
const $OwnBody_content__setup__script = _script("c7", ($scope) => _on($scope.a, "click", function() {
	$OwnBody_content__count($scope, +$scope.c + 1);
}));
const $OwnBody_content__setup = ($scope) => {
	$OwnBody_content__setup__script($scope);
	$OwnBody_content__count($scope, 0);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__setup = ($scope) => {
	$scope.b._ = $scope._;
	$LazyBody_content__setup($scope.b);
	$scope.c._ = $scope._;
	$ChildBody_content__setup($scope.c);
	$OwnBody_content__setup($scope.d);
	$scope.e._ = $scope._;
	$Outer_content__setup($scope.e);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("c15", /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<b> </b>${_w0}${_w1}${_w2}${_w3}<!>`)($LazyBody_content__template, $ChildBody_content__template, $OwnBody_content__template, $Outer_content__template), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D l/${_w0}&/${_w1}&/${_w2}&/${_w3}&b`)($LazyBody_content__walks, $ChildBody_content__walks, $OwnBody_content__walks, $Outer_content__walks), $catch_content__setup, $catch_content__$params);
const $Inner_content__input_label = /*@__PURE__*/ _init_resume("c10", _closure_resume("c11", /*@__PURE__*/ _fill_closure("c17", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $load_LazyChild_tag_input_label($scope.b, $scope._.d)), 2)));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$load_LazyChild_setup($scope, $scope.b, $scope.a);
};
const $ChildBody_content__input_label = /*@__PURE__*/ _init_resume("c4", _closure_resume("c5", /*@__PURE__*/ _fill_closure("c17", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $input_label($scope.a, $scope._.d)), 1)));
const $ChildBody_content__setup = ($scope) => {
	$ChildBody_content__input_label($scope);
	$setup($scope.a);
};
const $LazyBody_content__input_label = /*@__PURE__*/ _init_resume("c1", _closure_resume("c2", /*@__PURE__*/ _fill_closure("c17", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $load_LazyChild_tag_input_label($scope.b, $scope._.d)), 0)));
const $LazyBody_content__setup = ($scope) => {
	$LazyBody_content__input_label($scope);
	$load_LazyChild_setup($scope, $scope.b, $scope.a);
};

// lazy-child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:lazy-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
