// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $if_content__err_message = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content__setup = $if_content__err_message;
const $catch_content__setup = _script("a4", ($scope) => console.log("mounted"));
const $catch_content__if = /*@__PURE__*/ _if(0, "<b>missing <!></b>", "Db%", $if_content__setup, "<i>failed</i>");
const $catch_content__err_status = ($scope, err_status) => $catch_content__if($scope, err_status === 404 ? 0 : 1);
const $catch_content__for = /*@__PURE__*/ _for_of_unkeyed(1, "<span> </span>", "D ", 0, $for_content__$params);
const $catch_content__err_items = ($scope, err_items) => $catch_content__for($scope, [err_items]);
const $catch_content__$params = ($scope, $params2) => {
	$catch_content__err_status($scope, $params2[0]?.status);
	$catch_content__err_message($scope, $params2[0]?.message);
	$catch_content__err_items($scope, $params2[0]?.items);
};
const $catch_content__err_message = /*@__PURE__*/ _const(5, $if_content__err_message);
const $catch_content = _content$1("a6", "<!><!><!><!>", "b%b%", $catch_content__setup, $catch_content__$params);
const $count = /*@__PURE__*/ _fill_let("a8", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
