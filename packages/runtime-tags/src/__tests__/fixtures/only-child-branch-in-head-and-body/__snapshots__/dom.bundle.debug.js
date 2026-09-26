// template.marko
const $template = "<!><html><head><!></head><body><!></body></html>";
const $walks = "bE%lD%m";
const $for_content__href = ($scope, href) => _attr($scope["#link/0"], "href", href);
const $for_content__$params = ($scope, $params2) => $for_content__href($scope, $params2[0]);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope._, false);
}));
const $if_content__setup = $if_content__setup__script;
const $if = /*@__PURE__*/ _if("#text/1", "<button>hide</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
function $setup($scope) {
	$show($scope, true);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<link rel=stylesheet>", " ", 0, $for_content__$params);
const $input_styles = ($scope, input_styles) => $for($scope, [input_styles]);
const $input = ($scope, input) => $input_styles($scope, input.styles);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
