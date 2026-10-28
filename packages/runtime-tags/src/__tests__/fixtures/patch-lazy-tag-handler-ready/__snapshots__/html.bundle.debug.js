// child.marko
const $template$1 = "<button>go</button>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/child.marko_0_input_title#3_handler#4"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0_input_title#3_handler#4; ;<button>go</button>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const handler = _bind_resume((event) => event.target.dataset.seen = input.title, "__tests__/child.marko_0/handler", $scope0_id);
	_html(`<button${_patch_attrs({
		title: input.title,
		onClick: handler
	}, "#button/0", $scope0_id, "button", void 0, $scope0_reason, 0)}>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input_title#3_handler#4");
	_scope($scope0_id, { input_title: input.title }, "__tests__/child.marko", 0, {
		input_title: ["input.title"],
		"EventAttributes:#button/0": ["...{ title: input.title, onClick: handler }", "2:12"]
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}&l`)(" b");
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}]);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&l`)(" b")};${((_w0) => `<main><!>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	$Child_withLoadAssets({ title: input.title });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
