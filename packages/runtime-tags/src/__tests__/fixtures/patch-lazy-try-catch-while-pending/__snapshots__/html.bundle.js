// child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	a1: "a1;D%c%;<em><!> <!></em>",
	a2: "a2,<s>caught</s>",
	a3: "a3,<i>loading</i>",
	a4: "a4;D%c%;<em><!> <!></em>",
	a5: "a5;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", $global$1.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "a", $global$1.name)} ${_patch_text($scope4_id, "b", v, 2)}</em>`);
			_fill_global_subscribe("a0", $scope4_id);
			_scope($scope4_id, {});
		}, 1, "a1", 1);
		_fill_global_subscribe("a6", $scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<s>caught</s>");
	}, "a3", "a2", "a5", void 0, void 0, 3);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<main><!>${_w0}</main>`)($template)}`)() });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "b", 0);
	$Child_withLoadAssets({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
