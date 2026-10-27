// tags/label.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko; ;<output></output>" });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/label.marko_0_get#3" : "PatchEffect:__tests__/tags/label.marko_0_get#3", "get");
	$scope0_page ? _scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1),
	"__tests__/template.marko_0_#text#0/await": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_0_#text#0/await${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1),
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.v, (value) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:value", value, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		label_default({ get: _bind_resume(function() {
			return value;
		}, "__tests__/template.marko_1/get", $scope1_id) });
		_patch_child_end();
		$scope0_page && _scope($scope1_id, {
			value,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { value: "1:8" });
	}, 1, "__tests__/template.marko_1*content", 1);
}, 1);
