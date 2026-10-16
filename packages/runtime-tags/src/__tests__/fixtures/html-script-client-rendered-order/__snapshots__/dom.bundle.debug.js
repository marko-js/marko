// tags/child.marko
const $template$1 = "<script><\/script>";
const $walks$1 = "! b";
function $setup$1($scope) {
	_start_late($scope["#script/0"], "document.querySelector(\"main\").dataset.ran += \" child\";");
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "! b", $setup$1);

// template.marko
const $template = "<main data-ran><button>show</button><!></main>";
const $walks = "D b%l";
const $for_content__i = ($scope, i) => _attr($scope["#script/0"], "data-i", i);
const $for_content__setup = ($scope) => _start_late($scope["#script/0"], "document.querySelector(\"main\").dataset.ran += \" row\" + document.currentScript.dataset.i;");
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__input_n = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr($scope["#script/0"], "data-n", $scope._.input_n));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/3", "<script><\/script>", "! ", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	_start_late($scope["#script/0"], "document.querySelector(\"main\").dataset.ran += \" \" + document.currentScript.dataset.n;");
	_start_late($scope["#script/1"], "document.querySelector(\"main\").dataset.ran += \" static\";");
	$setup$1($scope["#childScope/2"]);
	_start_late($scope["#script/4"], "document.querySelector(\"main\").dataset.ran += \" last\";");
	$if_content__for($scope, [[1, 2]]);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<script><\/script><script><\/script>${_w0}<!><script><\/script>`)($template$1), /*@__PURE__*/ ((_w0) => `! b! b/${_w0}&%b! b`)("! b"), $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show#5", ($scope) => {
	if ($scope.show) document.querySelector("main").dataset.seen = document.querySelector("main").dataset.ran;
});
const $show = /*@__PURE__*/ _let("show/5", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_n($scope, input.n);
const $input_n = /*@__PURE__*/ _const("input_n", $if_content__input_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
