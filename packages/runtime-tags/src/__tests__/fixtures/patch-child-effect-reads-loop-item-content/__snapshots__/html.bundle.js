// tags/shows.marko
const $template$1 = "<div><!></div><pre></pre>";
const $walks$1 = " D%l b";
const $setup$2 = [[], []];
_shells({ c: "c; D%l ;<div><!></div><pre></pre>" });
var shows_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "a")}<pre></pre>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "c0", 1, $fg__input_content, "f");
	_scope($scope0_id, { f: input.content }) || $fg__input_content && _patch_write($scope0_id, "xf", input.content, !_server_guard($scope0_reason, 0));
});

// tags/first.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: `b${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}` });
var first_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const item = [...input.item][0];
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	shows_default({ content: item.content });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0",
	a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => $item = attrTags($item, { content: _content_resume("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "a", x, 1, 4, 0));
		_scope($scope1_id, {});
	}, $scope0_id, () => [{ 1: x }]) }));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	first_default({ item: $item });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
