// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__setup__$global_o = /*@__PURE__*/ _fill_global_path_join("__tests__/template.marko_1_$global_o#0:7", ($scope) => {
	_text($scope["#text/0"], $scope.$global.o.x.toUpperCase());
	_text($scope["#text/1"], $scope.$global.o.list.length);
	_text($scope["#text/2"], $scope.$global.o["a.b"]);
}, "o", "x", 0, "o", "list", "length", 0, "o", "a.b");
const $if_content__setup__$global_c_d = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_c_d#0:15", ($scope) => _text($scope["#text/3"], $scope.$global["c.d"]), "c.d");
const $if_content__setup__$global_p = /*@__PURE__*/ _fill_global_path_join("__tests__/template.marko_1_$global_p#0:17", ($scope) => _text($scope["#text/4"], $scope.$global.p?.x), "p", "x");
const $if_content__setup = ($scope) => {
	$if_content__setup__$global_o($scope);
	$if_content__setup__$global_c_d($scope);
	$if_content__setup__$global_p($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p><b> </b><i> </i><u> </u><s> </s>", "D lD lD lD lD ", $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
