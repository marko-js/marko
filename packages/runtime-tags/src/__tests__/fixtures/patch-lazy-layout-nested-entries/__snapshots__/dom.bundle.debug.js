// template.marko
const $template = "<html><body><!></body></html>";
const $walks = "E%m";
const $setup = ($_) => {};
let $load_PageA_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page-a.marko.setup.mjs"));
let $load_PageA_tag_input_wide = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:page-a.marko.input_wide.mjs"), "ready:__tests__/page-a.marko");
let $load_PageA_tag_input_note = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:page-a.marko.input_note.mjs"), "ready:__tests__/page-a.marko");
let $load_PageB_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:page-b.marko.setup.mjs"));
let $load_PageB_tag_input_wide = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:page-b.marko.input_wide.mjs"), "ready:__tests__/page-b.marko");
let $load_PageB_tag_input_note = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:page-b.marko.input_note.mjs"), "ready:__tests__/page-b.marko");
let $load_Layout_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:layout.marko.setup.mjs"));
let $load_Layout_tag_input_content = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:layout.marko.input_content.mjs"), "ready:__tests__/layout.marko");
let $load_Layout_tag_input_list = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:layout.marko.input_list.mjs"), "ready:__tests__/layout.marko");
const $else_content2__input_wide = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_input_wide#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_wide", /*@__PURE__*/ _closure_get("input_wide/9", ($scope) => $load_PageB_tag_input_wide($scope["#childScope/1"], $scope._._._.input_wide), ($scope) => $scope._._._), 1));
const $else_content2__setup = ($scope) => {
	$else_content2__input_wide($scope);
	$else_content2__input_note($scope);
	$load_PageB_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $else_content2__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_input_note#0:6/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill2", "input_note", /*@__PURE__*/ _closure_get("input_note/10", ($scope) => $load_PageB_tag_input_note($scope["#childScope/1"], $scope._._._.input_note), ($scope) => $scope._._._), 1));
const $if_content__input_wide = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_wide#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_wide", /*@__PURE__*/ _closure_get("input_wide/9", ($scope) => $load_PageA_tag_input_wide($scope["#childScope/1"], $scope._._._.input_wide), ($scope) => $scope._._._), 0));
const $if_content__setup = ($scope) => {
	$if_content__input_wide($scope);
	$if_content__input_note($scope);
	$load_PageA_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $if_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_note#0:6/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill2", "input_note", /*@__PURE__*/ _closure_get("input_note/10", ($scope) => $load_PageA_tag_input_note($scope["#childScope/1"], $scope._._._.input_note), ($scope) => $scope._._._), 0));
const $Layout_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content__setup, "<!><!><!>", "b%/&", $else_content2__setup);
const $Layout_content__input_page = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_page#0:3/init", /*@__PURE__*/ _closure_get("input_page/7", ($scope) => $Layout_content__if($scope, $scope._._.input_page === 1 ? 0 : 1), ($scope) => $scope._._));
const $Layout_content__setup = $Layout_content__input_page;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $Layout_content__setup);
const $else_content__input_list = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_list#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_list", /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => $load_Layout_tag_input_list($scope["#childScope/1"], $scope._.input_list))));
const $else_content__setup = ($scope) => {
	$else_content__input_list._($scope);
	$load_Layout_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Layout_tag_input_content($scope["#childScope/1"], $Layout_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", "<p>home</p>", 0, 0, "<!><!><!>", "b%/&", $else_content__setup);
const $input_page__closure = /*@__PURE__*/ _closure($Layout_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", ($scope) => {
	$input_page__closure($scope);
	$if($scope, $scope.input_page === 0 ? 0 : 1);
});
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_list($scope, input.list);
	$input_wide($scope, input.wide);
	$input_note($scope, input.note);
};
const $input_list = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_list", $else_content__input_list);
const $input_wide__closure = /*@__PURE__*/ _closure($if_content__input_wide, $else_content2__input_wide);
const $input_wide = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_wide", $input_wide__closure);
const $input_note__closure = /*@__PURE__*/ _closure($if_content__input_note, $else_content2__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E%m", 0, $input);

// layout.marko
const $template = "<nav><!></nav><main><!></main>";
const $walks = "D%lD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $await_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<a> </a>", "D ", 0, $for_content__$params);
const $await_content__list = ($scope, list) => $await_content__for($scope, [list]);
const $await_content__$params = ($scope, $params2) => $await_content__list($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_list = $await_promise;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_list($scope, input.list);
	$input_content($scope, input.content);
};
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template, $walks, $setup, $input);

// page-a.marko
const $template = "<h1>A</h1><p> </p><!><button> </button>";
const $walks = "bD l%b D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/page-a.marko_fill0", "n/8", ($scope) => _text($scope["#text/3"], $scope.n));
const $setup__script = _script("__tests__/page-a.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_note = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $if = /*@__PURE__*/ _if("#text/1", "<p>wide</p>");
const $input_wide = ($scope, input_wide) => $if($scope, input_wide ? 0 : 1);
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_wide($scope, input.wide);
};
var page_a_default = /*@__PURE__*/ _template("__tests__/page-a.marko", $template, $walks, $setup, $input);

// page-b.marko
const $template = "<h1>B</h1><p> </p><!><!>";
const $walks = "bD l%c";
const $setup = ($_) => {};
const $input_note = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $if = /*@__PURE__*/ _if("#text/1", "<p>wide</p>");
const $input_wide = ($scope, input_wide) => $if($scope, input_wide ? 0 : 1);
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_wide($scope, input.wide);
};
var page_b_default = /*@__PURE__*/ _template("__tests__/page-b.marko", $template, $walks, 0, $input);

// v:layout.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:page-a.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:page-b.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
