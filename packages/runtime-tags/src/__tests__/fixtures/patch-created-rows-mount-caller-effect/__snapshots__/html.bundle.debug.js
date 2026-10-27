// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;D ;<i> </i>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:it_label", it?.label, !_server_guard($scope0_reason, 0));
		_html(`<i>${_patch_text($scope1_id, "#text/0", it.label, void 0, $scope0_reason, 0)}</i>`);
		_script($scope1_id, "__tests__/tags/list.marko_1_it_label#3");
		_filled_guard($scope0_reason, 0) && _patch_effect($scope1_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/list.marko_1_it_label#3" : "PatchEffect:__tests__/tags/list.marko_1_it_label#3", "it_label");
		_scope($scope1_id, { it_label: it?.label }, "__tests__/tags/list.marko", "1:2", { it_label: ["it.label", "1:6"] });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { label: x.name });
	});
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	list_default({ item: $item });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
