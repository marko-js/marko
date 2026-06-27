// template.marko
const $MyTag_content__walks = "D%c%c%l", $MyTag_content__template = "<div><!>|<!>|<!></div>";
const $template = /* @__PURE__ */ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<button>inc <!></button>`)($MyTag_content__template, $MyTag_content__template, $MyTag_content__template);
const $walks = /* @__PURE__ */ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}& Db%l`)($MyTag_content__walks, $MyTag_content__walks, $MyTag_content__walks);
const $MyTag_content__input = /* @__PURE__ */ _closure_get("input", ($scope) => _text($scope["#text/2"], JSON.stringify($scope._.input)));
const $MyTag_content__setup = /* @__PURE__ */ _child_setup($MyTag_content__input);
const $MyTag_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $MyTag_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $MyTag_content__tag_params = ($scope, $params2) => {
	$MyTag_content__a($scope, $params2[0]);
	$MyTag_content__b($scope, $params2[1]);
};
const $args = /* @__PURE__ */ _const("args", ($scope) => $MyTag_content__tag_params($scope["#childScope/0"], [...$scope.args]));
const $x__OR__args = ($scope) => {
	let $cgrp;
	if ($scope.x) {
		$cgrp = attrTag({ y: 1 });
	} else {
		$cgrp = attrTag({ y: 2 });
	}
	$MyTag_content__tag_params($scope["#childScope/2"], [...$scope.args, {
		cgrp: $cgrp,
		row: attrTag({ r: $scope.x })
	}]);
};
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/3"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/7", ($scope) => {
	_text($scope["#text/4"], $scope.x);
	$args($scope, [$scope.x, 2]);
	$x__OR__args($scope);
	$x__script($scope);
});
function $setup($scope) {
	$MyTag_content__setup._($scope["#childScope/0"], $scope);
	$MyTag_content__setup._($scope["#childScope/1"], $scope);
	$MyTag_content__a($scope["#childScope/1"], 7);
	$MyTag_content__b($scope["#childScope/1"], 8);
	$MyTag_content__setup._($scope["#childScope/2"], $scope);
	$x($scope, 1);
}
const $input__closure = /* @__PURE__ */ _closure($MyTag_content__input);
const $input = /* @__PURE__ */ _const("input", $input__closure);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
