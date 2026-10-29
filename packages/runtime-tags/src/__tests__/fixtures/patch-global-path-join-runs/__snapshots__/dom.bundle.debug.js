// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__setup__$global_o = /*@__PURE__*/ _fill_global_path_join("__tests__/template.marko_1_$global_o#0:7", ($scope) => _text($scope["#text/0"], track("p", $scope.$global.o.x)), "o", "x");
const $if_content__setup = $if_content__setup__$global_o;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
