// tags/child.marko
function $setup($scope) {
	_return($scope, "foo");
}

// template.marko
const $if_content__value = ($scope, value) => $Wrapper_content__input_value($scope.c, value);
const $if_content__setup = ($scope) => {
	_var($scope, 0, $if_content__value);
	_var($scope, 2, $if_content__wrapped);
	$setup($scope.a);
};
const $if_content__wrapped = _var_resume("a1", ($scope, wrapped) => _text($scope.e, wrapped));
const $Wrapper_content__input_value = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>Value: <!></div>`)(""), /*@__PURE__*/ ((_w0) => `b0${_w0}&0&Db%l`)(""), $if_content__setup);
const $open = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
