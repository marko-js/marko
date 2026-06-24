// child-b.marko
const $template = "<button class=b>b:<!></button>";
const $walks = " Db%l";
const $isInner__OR__inner__script = _script("__tests__/child-b.marko_0_isInner_inner", ($scope) => _on($scope["#button/0"], "click", function() {
	$verified($scope, String($scope.isInner($scope.inner)));
}));
const $isInner__OR__inner = /*@__PURE__*/ _or(8, $isInner__OR__inner__script);
const $isInner = /*@__PURE__*/ _const("isInner", $isInner__OR__inner);
const $input_isInner = $isInner;
const $inner = /*@__PURE__*/ _let("inner/7", $isInner__OR__inner);
const $input_inner = $inner;
const $verified = /*@__PURE__*/ _let("verified/9", ($scope) => _text($scope["#text/1"], $scope.verified));
function $setup($scope) {
	$verified($scope, "?");
}
const $input = ($scope, input) => {
	$input_isInner($scope, input.isInner);
	$input_inner($scope, input.inner);
};
var child_b_default = /*@__PURE__*/ _template("__tests__/child-b.marko", $template, $walks, $setup, $input);

// child-s.marko
const $template = "<button class=s>s:<!></button>";
const $walks = " Db%l";
const $isShared__OR__holder__script = _script("__tests__/child-s.marko_0_isShared_holder", ($scope) => _on($scope["#button/0"], "click", function() {
	$verified($scope, String($scope.isShared($scope.holder)));
}));
const $isShared__OR__holder = /*@__PURE__*/ _or(8, $isShared__OR__holder__script);
const $isShared = /*@__PURE__*/ _const("isShared", $isShared__OR__holder);
const $input_isShared = $isShared;
const $holder = /*@__PURE__*/ _let("holder/7", $isShared__OR__holder);
const $input_holder = $holder;
const $verified = /*@__PURE__*/ _let("verified/9", ($scope) => _text($scope["#text/1"], $scope.verified));
function $setup($scope) {
	$verified($scope, "?");
}
const $input = ($scope, input) => {
	$input_isShared($scope, input.isShared);
	$input_holder($scope, input.holder);
};
var child_s_default = /*@__PURE__*/ _template("__tests__/child-s.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=main>main:<!></button><!><!><!><!><!>";
const $walks = " Db%l%/&b%/&c";
let $load_ChildS_setup = /*@__PURE__*/ _load_setup("#text/2", "#childScope/3", () => import("./v:child-s.marko.setup.mjs"));
let $load_ChildS_tag_input_holder = /*@__PURE__*/ _load_signal(() => import("./v:child-s.marko.input_holder.mjs"));
let $load_ChildS_tag_input_isShared = /*@__PURE__*/ _load_signal(() => import("./v:child-s.marko.input_isShared.mjs"));
let $load_ChildB_setup = /*@__PURE__*/ _load_setup("#text/4", "#childScope/5", () => import("./v:child-b.marko.setup.mjs"));
let $load_ChildB_tag_input_inner = /*@__PURE__*/ _load_signal(() => import("./v:child-b.marko.input_inner.mjs"));
let $load_ChildB_tag_input_isInner = /*@__PURE__*/ _load_signal(() => import("./v:child-b.marko.input_isInner.mjs"));
const $shared__OR__count__script = _script("__tests__/template.marko_0_shared_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.shared).length);
}));
const $shared__OR__count = /*@__PURE__*/ _or(9, $shared__OR__count__script);
const $shared = /*@__PURE__*/ _let("shared/6", ($scope) => {
	$load_ChildS_tag_input_holder($scope["#childScope/3"], $scope.shared);
	$load_ChildS_tag_input_isShared($scope["#childScope/3"], $isShared($scope));
	$load_ChildB_tag_input_isInner($scope["#childScope/5"], $isInner($scope));
	$shared_inner($scope, $scope.shared?.inner);
	$shared__OR__count($scope);
});
const $shared_inner = /*@__PURE__*/ _const("shared_inner", ($scope) => $load_ChildB_tag_input_inner($scope["#childScope/5"], $scope.shared_inner));
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$shared__OR__count($scope);
});
function $setup($scope) {
	$load_ChildS_setup($scope);
	$load_ChildB_setup($scope);
	$shared($scope, { inner: { value: 1 } });
	$count($scope, 0);
}
function $isInner($scope) {
	return function(o) {
		return o === Object.values($scope.shared)[0];
	};
}
function $isShared($scope) {
	return function(o) {
		return o === $scope.shared;
	};
}
_resume("__tests__/template.marko_0/isInner", $isInner);
_resume("__tests__/template.marko_0/isShared", $isShared);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child-b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:child-s.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
