// template.marko
const $catch_content2__err_cause_code__script = _script("a5", ($scope) => console.log($scope.d));
const $catch_content2__err_cause_code = /*@__PURE__*/ _const(3, $catch_content2__err_cause_code__script);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_cause_code($scope, $params3[0]?.cause?.code);
const $catch_content2 = _content$1("a8", 0, 0, 0, $catch_content2__$params);
const $catch_content__err_message = /*@__PURE__*/ _const(4, ($scope) => _text($scope.a, $scope.e));
const $catch_content__setup = _script("a0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.e);
}));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a3", "<b> </b><button>log</button>", "D l ", $catch_content__setup, $catch_content__$params);
