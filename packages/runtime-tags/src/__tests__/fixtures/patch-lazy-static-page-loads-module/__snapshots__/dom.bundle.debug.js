// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
let $load_Page_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page.marko.setup.mjs"));
const $if_content__setup = ($scope) => $load_Page_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// page.marko
const $template = "<h1>Static</h1>";
const $walks = "b";
const $setup = ($_) => {};
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, "b");

// v:page.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
