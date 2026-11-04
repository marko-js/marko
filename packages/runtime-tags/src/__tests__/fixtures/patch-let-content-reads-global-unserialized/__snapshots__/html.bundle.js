// tags/card.marko
const $template = "<button class=clear>clear</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button class=clear>clear</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=clear>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", $global$1.label, $scope1_page)}</b>`);
		_fill_global_subscribe("a0", $scope1_id, 1);
		_scope($scope1_id, {});
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
