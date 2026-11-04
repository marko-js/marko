// tags/card.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_dynamic_tag($scope0_id, "a", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button>+</button>${_el_mark($scope1_id, "a")}<b>${_text_mark($scope1_id, "b", $global$1.label + count)}</b>`);
		_fill_global_subscribe("a0", $scope1_id, 1);
		_script($scope1_id, "a1");
		_scope($scope1_id, { c: count });
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
