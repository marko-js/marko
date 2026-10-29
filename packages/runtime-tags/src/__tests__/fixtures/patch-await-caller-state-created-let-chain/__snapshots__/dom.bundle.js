// tags/card.marko
const $o = _let(6, ($scope) => $o_label($scope, $scope.g?.label));
const $a = _let(5, ($scope) => $o($scope, { label: $scope.f }));
const $input_label = $a;
const $o_label__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.h);
}));
const $o_label = /*@__PURE__*/ _const(7, ($scope) => {
	$o_label__script($scope);
	_text($scope.a, $scope.h);
});

// tags/show-await.marko
const $await_content__d = /*@__PURE__*/ _let_change(10, ($scope) => _text($scope.d, $scope.k));
const $await_content__c = _let(9, ($scope) => {
	$await_content__d($scope, $scope.j, $valueChange($scope));
	_style_rule_item($scope.a, "--M_c0", $scope.j);
	_text($scope.c, $scope.j);
});
const $await_content__b = _let(8, ($scope) => {
	$await_content__c($scope, $scope.i);
	_text($scope.b, $scope.i);
});
const $await_content__a = _let(7, ($scope) => $await_content__b($scope, $scope.h));
const $await_content__x = ($scope, x) => {
	$await_content__a($scope, x);
	$input_label($scope.e, x);
};
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;
const $valueChange = ($scope) => (_new_c) => {
	$await_content__c($scope, _new_c);
};
_resumed.c1 = $valueChange;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g)));
const $p = _let(6, $if_content__p);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
