// child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	a0: "a0;D%c%;<em><!> <!></em>",
	a1: "a1,<s>caught</s>",
	a2: "a2,<i>loading</i>",
	a3: "a3;D%c%;<em><!> <!></em>",
	a4: "a4;b%;<!><!><!>",
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
			_html(`<em>${_text_mark($scope4_id, "a", $global$1.name, 1, 4, 0)} ${_text_mark($scope4_id, "b", v, 2, 4, 0)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", void 0, 1);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<s>caught</s>");
	}, "a2", "a1", "a4", 0, 0, 3);
	_fill_global_subscribe("a5", $scope0_id);
	_fill_global_subscribe("a6", $scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)("b%c")};${((_w0) => `<main><!>${_w0}</main>`)($template)}` });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Child_withLoadAssets({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
