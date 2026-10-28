// tags/shows.marko
const $template$2 = "<div><!></div><pre></pre>";
const $walks$2 = " D%l b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/shows.marko": "__tests__/tags/shows.marko; D%l ;<div><!></div><pre></pre>" });
var shows_default = _template("__tests__/tags/shows.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<pre></pre>${_el_resume($scope0_id, "#pre/2")}`);
	_script($scope0_id, "__tests__/tags/shows.marko_0_input_content#5", 1, _filled_guard($scope0_reason, 0), "input_content");
	_scope($scope0_id, { input_content: input.content }, "__tests__/tags/shows.marko", 0, { input_content: ["input.content"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// tags/first.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/first.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/first.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2) });
var first_default = _template("__tests__/tags/first.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const item = [...input.item][0];
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	shows_default({ content: item.content });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/first.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", x, void 0, 4, 0));
			_scope($scope1_id, {}, "__tests__/template.marko", "3:6");
		}, $scope0_id, () => [{ x }]) });
	});
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	first_default({ item: $item });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
