// template.marko
const $for_content__item = ($scope, item) => _attr($scope.a, "data-item", item);
const $for_content__setup = ($scope) => _start_late($scope.a, "(window.ran ||= []).push(\"row \" + document.currentScript.dataset.item)");
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_attrs__script = _script("a1", ($scope) => _attrs_script($scope, "b"));
const $if_content__input_attrs = /*@__PURE__*/ _if_closure(4, 0, ($scope) => {
	_attrs($scope, "b", {
		nonce: $scope.$.cspNonce,
		...$scope._.k
	});
	_start_late($scope.b, "(window.ran ||= []).push(\"spread\")");
	$if_content__input_attrs__script($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__input_src._($scope);
	$if_content__input_external._($scope);
	$if_content__input_a._($scope);
	$if_content__type._($scope);
	_start_late($scope.a, "(window.ran ||= []).push(\"plain\")");
	_start_late($scope.c, void 0, "/never.js");
	_start_late($scope.g, "(window.ran ||= []).push(\"both \" + document.currentScript.dataset.a)");
};
const $if_content__input_src = /*@__PURE__*/ _if_closure(4, 0, ($scope) => _start_late($scope.d, void 0, $scope._.l));
const $if_content__input_external__script = _script("a0", ($scope) => _attrs_script($scope, "e"));
const $if_content__input_external = /*@__PURE__*/ _if_closure(4, 0, ($scope) => {
	_attrs($scope, "e", {
		nonce: $scope.$.cspNonce,
		...$scope._.m
	});
	_start_late($scope.e, "(window.ran ||= []).push(\"inline\")");
	$if_content__input_external__script($scope);
});
const $if_content__input_a = /*@__PURE__*/ _if_closure(4, 0, ($scope) => {
	_attr($scope.f, "data-a", $scope._.n);
	_attr($scope.g, "data-a", $scope._.n);
});
const $if_content__type = /*@__PURE__*/ _if_closure(4, 0, ($scope) => {
	_attr($scope.a, "type", $scope._.p);
	_attr($scope.c, "type", $scope._.p);
	_attr($scope.d, "type", $scope._.p);
	_start_late($scope.f, `(window.ran ||= []).push(${_to_text(JSON.stringify($scope._.p))} + " " + document.currentScript.dataset.a)`);
	_attr($scope.g, "type", $scope._.p && "text/javascript");
});
const $if = /*@__PURE__*/ _if(4, "<script><\/script><script><\/script><script><\/script><script><\/script><script><\/script><script><\/script><script><\/script>", "! b! b! b! b! b! b! ", $if_content__setup);
const $show = /*@__PURE__*/ _let(14, ($scope) => $if($scope, $scope.o ? 0 : 1));
const $for = /*@__PURE__*/ _for_of_unkeyed(5, "<script><\/script>", "! ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(16, ($scope) => $for($scope, [$scope.q]));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$show($scope, true);
	});
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.q, "b"]);
	});
});
const $input_rootAttrs__script = _script("a2", ($scope) => _attrs_script($scope, "d"));
