// template.marko
const $template = "<main><button>show</button><!></main>";
const $walks = "D b%l";
const $if_content__input_media = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	_attr($scope["#style/1"], "media", $scope._.input_media);
	_attr($scope["#style/2"], "media", $scope._.input_media);
	_attr($scope["#style/3"], "media", $scope._.input_media);
});
const $if_content__setup = ($scope) => {
	$if_content__input_media._($scope);
	$if_content__input_src._($scope);
	_attr($scope["#style/0"], "nonce", $scope.$global.cspNonce);
	_start_late($scope["#style/0"], "main { --a: 1 }");
	_start_late($scope["#style/1"], "main { --b: 1 }");
	_start_late($scope["#style/2"], "main { --c: 1 }");
	_start_late($scope["#style/3"], "main { --d: 1 }");
};
const $if_content__input_src = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr($scope["#style/3"], "src", $scope._.input_src));
const $if = /*@__PURE__*/ _if("#text/1", "<style></style><style></style><style src=x.css></style><style></style>", " b! b! b! ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_media($scope, input.media);
	$input_src($scope, input.src);
};
const $input_media = /*@__PURE__*/ _const("input_media", $if_content__input_media);
const $input_src = /*@__PURE__*/ _const("input_src", $if_content__input_src);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
