// tags/child.marko
const $template = "<script><\/script>";
function $setup($scope) {
	_start_late($scope.a, "document.querySelector(\"main\").dataset.ran += \" child\";");
}

// template.marko
const $for_content__i = ($scope, i) => _attr($scope.a, "data-i", i);
const $for_content__setup = ($scope) => _start_late($scope.a, "document.querySelector(\"main\").dataset.ran += \" row\" + document.currentScript.dataset.i;");
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__input_n = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _attr($scope.a, "data-n", $scope._.e));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(3, "<script><\/script>", "! ", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	_start_late($scope.a, "document.querySelector(\"main\").dataset.ran += \" \" + document.currentScript.dataset.n;");
	_start_late($scope.b, "document.querySelector(\"main\").dataset.ran += \" static\";");
	$setup($scope.c);
	_start_late($scope.e, "document.querySelector(\"main\").dataset.ran += \" last\";");
	$if_content__for($scope, [[1, 2]]);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<script><\/script><script><\/script>${_w0}<!><script><\/script>`)($template), /*@__PURE__*/ ((_w0) => `! b! b/${_w0}&%b! b`)("! b"), $if_content__setup);
const $show__script = _script("a0", ($scope) => {
	if ($scope.f) document.querySelector("main").dataset.seen = document.querySelector("main").dataset.ran;
});
const $show = /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$show__script($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
