// child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/child.marko_4*content": "__tests__/child.marko_4*content;D%c%;<em><!> <!></em>",
	"__tests__/child.marko_3*content": "__tests__/child.marko_3*content,<s>caught</s>",
	"__tests__/child.marko_2*content": "__tests__/child.marko_2*content,<i>loading</i>",
	"__tests__/child.marko_1_#text#0/await": "__tests__/child.marko_1_#text#0/await;D%c%;<em><!> <!></em>",
	"__tests__/child.marko_1*content": "__tests__/child.marko_1*content;b%;<!><!><!>",
	"__tests__/child.marko": "__tests__/child.marko;b%;<!><!><!>"
});
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", $global$1.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "#text/0", $global$1.name, 1, 4, 0)} ${_text_resume($scope4_id, "#text/1", v, 2, 4, 0)}</em>`);
			_fill_global_subscribe("__tests__/child.marko_4_$global_name#0:9", $scope4_id);
			_scope($scope4_id, {}, "__tests__/child.marko", "2:4");
		}, 1, "__tests__/child.marko_4*content", 1);
		_fill_global_subscribe("__tests__/child.marko_1_$global_promise#0:7", $scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<s>caught</s>");
	}, "__tests__/child.marko_2*content", "__tests__/child.marko_3*content", "__tests__/child.marko_1*content", void 0, void 0, 3);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)("b%c");
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<main><!>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	$Child_withLoadAssets({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
