// track.ts
function track(where, value) {
	console.log(where, value);
	return value;
}

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__$global_o_x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_o_x#0:8/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], track("p", $scope.$global.o.x)));
const $if_content__setup = $if_content__$global_o_x;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#8/subscribe", $if_content__$global_o_x, "o", "x");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$global_o_x($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
