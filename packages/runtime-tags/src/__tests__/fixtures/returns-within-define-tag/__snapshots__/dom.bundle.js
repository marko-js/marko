// total: 3155 (min) 1550 (brotli)
// template.marko: 612 (min) 247 (brotli)
const $Twice_content__value__OR__call = /* @__PURE__ */ _or(4, ($scope) => _return($scope, $_return2($scope)));
const $Twice_content__call = /* @__PURE__ */ _let(3, $Twice_content__value__OR__call);
const $Twice_content__value = /* @__PURE__ */ _const(2, $Twice_content__value__OR__call);
const $Once_content__value__OR__call = /* @__PURE__ */ _or(4, ($scope) => _return($scope, $_return($scope)));
const $Once_content__call = /* @__PURE__ */ _let(3, $Once_content__value__OR__call);
const $Once_content__value = /* @__PURE__ */ _const(2, $Once_content__value__OR__call);
const $clickOnceCount = /* @__PURE__ */ _let(8, ($scope) => {
	$Once_content__value($scope.a, $onClickOnce($scope));
	_text($scope.d, $scope.i);
});
const $clickTwiceCount = /* @__PURE__ */ _let(10, ($scope) => {
	$Twice_content__value($scope.e, $onClickTwice($scope));
	_text($scope.h, $scope.k);
});
const $onClickOnce2__script = _script("a9", ($scope) => _on($scope.c, "click", $scope.j));
const $onClickOnce2 = _var_resume("a5", /* @__PURE__ */ _const(9, $onClickOnce2__script));
const $onClickTwice2__script = _script("a8", ($scope) => _on($scope.g, "click", $scope.l));
const $onClickTwice2 = _var_resume("a7", /* @__PURE__ */ _const(11, $onClickTwice2__script));
function $_return2($scope) {
	return function() {
		if ($scope.d) {
			$Twice_content__call($scope, $scope.d - 1);
			$scope.c();
		}
	};
}
function $_return($scope) {
	return function() {
		if ($scope.d) {
			$Once_content__call($scope, $scope.d - 1);
			$scope.c();
		}
	};
}
function $onClickOnce($scope) {
	return function() {
		$clickOnceCount($scope, $scope.i + 1);
	};
}
function $onClickTwice($scope) {
	return function() {
		$clickTwiceCount($scope, $scope.k + 1);
	};
}
_resume("a2", $_return2);
_resume("a0", $_return);
_resume("a1", $onClickOnce);
_resume("a3", $onClickTwice);
