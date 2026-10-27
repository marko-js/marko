// tags/label.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko; ;<output></output>" });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3", 1, _filled_guard($scope0_reason, 0), "get");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $Row_content__template = $template$1;
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Row = { content: _content("__tests__/template.marko_1*content", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:text", text, !_server_guard($scope1_reason, 0));
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		label_default({ get: _bind_resume(function() {
			return text;
		}, "__tests__/template.marko_1/get", $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			text,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { text: "1:15" });
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0", 1);
	Row.content({ text: input.v });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
