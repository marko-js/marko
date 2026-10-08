// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content2__setup = ($scope) => _attr_nonce($scope, "#style/0");
const $else_content__if = /*@__PURE__*/ _if("#text/0", "<style>\n      p {}\n    </style>", " ", $if_content2__setup);
const $else_content__mounted = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "mounted/1", ($scope) => $else_content__if($scope, $scope.mounted ? 0 : 1));
const $else_content__setup__script = _script("__tests__/template.marko_2", ($scope) => $else_content__mounted($scope, true));
const $else_content__setup = ($scope) => {
	$else_content__setup__script($scope);
	$else_content__mounted($scope, false);
};
const $if = /*@__PURE__*/ _if("#text/0", "<p>a</p>", 0, 0, "<!><!><!>", "b%", $else_content__setup);
const $input_page = ($scope, input_page) => $if($scope, input_page === 0 ? 0 : 1);
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
