// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
_load_lazy("ready:__tests__/tags/route-pg.marko", () => import("./route-pg.mjs").then(() => {}));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/file-store.marko
const $template$4 = "";
const $walks$4 = "";
const $files$1 = /*@__PURE__*/ _fill_let("__tests__/tags/file-store.marko_fill0", "files/3", ($scope) => _return($scope, $scope.files));
function $setup$4($scope) {
	_return_change($scope, $valueChange($scope));
	$files$1($scope, []);
}
const $input_value__script = _script("__tests__/tags/file-store.marko_0_input_value#2", ($scope) => $files$1($scope, $scope.input_value));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__script);
const $input$3 = ($scope, input) => $input_value($scope, input.value);
const $valueChange = ($scope) => (_new_files) => {
	$files$1($scope, _new_files);
};
_resumed["__tests__/tags/file-store.marko_0/valueChange"] = $valueChange;
var file_store_default = /*@__PURE__*/ _template("__tests__/tags/file-store.marko", "", "", /*@__PURE__*/ _return_setup($setup$4), $input$3);

// tags/file-tabs.marko
const $template$3 = "<p> </p><button>+</button>";
const $walks$3 = "D l b";
const $tabs = /*@__PURE__*/ _fill_let_change("__tests__/tags/file-tabs.marko_fill2", "tabs/7", ($scope) => _text($scope["#text/0"], $scope.tabs.map((tab) => tab.path).join()));
const $input_files__OR__input_filesChange = /*@__PURE__*/ _fill_join("__tests__/tags/file-tabs.marko_fill1", "input_filesChange", /*@__PURE__*/ _fill_join("__tests__/tags/file-tabs.marko_fill0", "input_files", /*@__PURE__*/ _shell_or("__tests__/tags/file-tabs.marko_0_input_files#4_input_filesChange#5/init", 6, ($scope) => $tabs($scope, $scope.input_files, $scope.input_filesChange))));
const $input_files$1 = /*@__PURE__*/ _const("input_files", $input_files__OR__input_filesChange);
const $input_filesChange$1 = /*@__PURE__*/ _const("input_filesChange", $input_files__OR__input_filesChange);
const $setup__script = _script("__tests__/tags/file-tabs.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$tabs($scope, [...$scope.tabs, { path: "b" }]);
}));
const $setup$3 = $setup__script;
const $input$2 = ($scope, input) => {
	$input_files$1($scope, input.files);
	$input_filesChange$1($scope, input.filesChange);
};
var file_tabs_default = /*@__PURE__*/ _template("__tests__/tags/file-tabs.marko", $template$3, $walks$3, $setup$3, $input$2);

// tags/file-panes.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_first_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_first = $dynamicTag;
const $input$1 = ($scope, input) => $input_first($scope, input.first);
var file_panes_default = /*@__PURE__*/ _template("__tests__/tags/file-panes.marko", $template$2, "D%l", 0, $input$1);

// tags/file-host.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $first_content__input_files = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/tags/file-host.marko_1_input_files#0:3/init", "input_files/5", ($scope) => $input_files$1($scope["#childScope/0"], $scope._.input_files), 0, "__tests__/tags/file-host.marko_1_input_files#0:3/subscribe");
const $first_content__setup = ($scope) => {
	$first_content__input_files($scope);
	$first_content__input_filesChange($scope);
	$setup$3($scope["#childScope/0"]);
};
const $first_content__input_filesChange = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/tags/file-host.marko_1_input_filesChange#0:4/init", "input_filesChange/6", ($scope) => $input_filesChange$1($scope["#childScope/0"], $scope._.input_filesChange), 0, "__tests__/tags/file-host.marko_1_input_filesChange#0:4/subscribe");
const $first_content = /*@__PURE__*/ _content("__tests__/tags/file-host.marko_1*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3), $first_content__setup);
function $setup$1($scope) {
	$input_first($scope["#childScope/0"], attrTag({ content: $first_content($scope) }));
}
const $input = ($scope, input) => {
	$input_files($scope, input.files);
	$input_filesChange($scope, input.filesChange);
};
const $input_files__closure = /*@__PURE__*/ _closure($first_content__input_files);
const $input_files = /*@__PURE__*/ _const("input_files", $input_files__closure);
const $input_filesChange__closure = /*@__PURE__*/ _closure($first_content__input_filesChange);
const $input_filesChange = /*@__PURE__*/ _const("input_filesChange", $input_filesChange__closure);
var file_host_default = /*@__PURE__*/ _template("__tests__/tags/file-host.marko", $template$1, $walks$1, $setup$1, $input);

// tags/route-pg.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1);
const $files = _var_resume("__tests__/tags/route-pg.marko_0_files#3/var", ($scope, files) => $input_files($scope["#childScope/2"], files));
function $setup($scope) {
	_var($scope, "#childScope/0", $files);
	$setup$4($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], [{ path: "a" }]);
	$setup$1($scope["#childScope/2"]);
	$input_filesChange($scope["#childScope/2"], $filesChange($scope));
}
const $filesChange = ($scope) => (_new_files) => {
	_var_change($scope["#childScope/0"], _new_files, "files");
};
_resumed["__tests__/tags/route-pg.marko_0/filesChange"] = $filesChange;
var route_pg_default = /*@__PURE__*/ _template("__tests__/tags/route-pg.marko", $template, $walks, $setup);
