// root.marko
const $template$1 = "<html><body><header>site</header><main><!></main></body></html>";
const $walks$1 = "EbD%n";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var root_default = /*@__PURE__*/ _template("__tests__/root.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
let $load_PageA_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page-a.marko.setup.mjs"));
let $load_PageB_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page-b.marko.setup.mjs"));
let $load_Docs_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:docs.marko.setup.mjs"));
let $load_Docs_tag_input_content = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:docs.marko.input_content.mjs"), "ready:__tests__/docs.marko");
const $else_content2__setup = ($scope) => $load_PageB_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if_content2__setup = ($scope) => $load_PageA_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $Docs_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content2__setup, "<!><!><!>", "b%/&", $else_content2__setup);
const $Docs_content__input_page = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_page#0:3/init", /*@__PURE__*/ _closure_get("input_page/4", ($scope) => $Docs_content__if($scope, $scope._._._.input_page === 1 ? 0 : 1), ($scope) => $scope._._._));
const $Docs_content__setup = $Docs_content__input_page;
const $Docs_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $Docs_content__setup);
const $else_content__setup = ($scope) => {
	$load_Docs_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Docs_tag_input_content($scope["#childScope/1"], $Docs_content($scope));
};
const $Root_content__if = /*@__PURE__*/ _if("#text/0", "<p>home</p>", 0, 0, "<!><!><!>", "b%/&", $else_content__setup);
const $Root_content__input_page = /*@__PURE__*/ _closure_get("input_page/4", ($scope) => $Root_content__if($scope, $scope._.input_page === 0 ? 0 : 1), 0, "__tests__/template.marko_1_input_page#0:3/subscribe");
const $Root_content__setup = $Root_content__input_page;
const $Root_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Root_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Root_content($scope));
}
const $input = ($scope, input) => $input_page($scope, input.page);
const $input_page__closure = /*@__PURE__*/ _closure($Root_content__input_page, $Docs_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// docs.marko
const $template = "<nav>docs</nav><article><!></article>";
const $walks = "bD%l";
const $setup = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var docs_default = /*@__PURE__*/ _template("__tests__/docs.marko", $template, $walks, 0, $input);

// page-a.marko
const $template = "<h1>A</h1>";
const $walks = "b";
const $setup = ($_) => {};
var page_a_default = /*@__PURE__*/ _template("__tests__/page-a.marko", $template, "b");

// page-b.marko
const $template = "<h1>B</h1>";
const $walks = "b";
const $setup = ($_) => {};
var page_b_default = /*@__PURE__*/ _template("__tests__/page-b.marko", $template, "b");

// v:docs.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:page-a.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];

// v:page-b.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
