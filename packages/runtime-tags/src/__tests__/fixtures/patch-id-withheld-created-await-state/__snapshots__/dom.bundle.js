// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $await_content__c = /*@__PURE__*/ _closure_get(8, ($scope) => $input_content($scope.a, $scope._.g));
const $await_content__setup = $await_content__c;
const $c = fill("c1", /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($await_content__c)));
const $await_content = _resumed.c4 = /*@__PURE__*/ _await_content(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise(1);
const $p = /*@__PURE__*/ _fill_let("c2", 7, ($scope) => $await_promise($scope, $scope.h));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, 0);
}));
