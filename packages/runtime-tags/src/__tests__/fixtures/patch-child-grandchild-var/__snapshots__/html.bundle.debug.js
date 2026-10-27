// tags/widget/tags/inner/index.marko
const $template$2 = "<button class=bump>+</button>";
const $walks$2 = " b";
const $setup$2 = [[], ["__tests__/tags/widget/tags/inner/index.marko_0"]];
_shells({ "__tests__/tags/widget/tags/inner/index.marko": "^__tests__/tags/widget/tags/inner/index.marko !__tests__/tags/widget/tags/inner/index.marko_0; ;<button class=bump>+</button>" });
_stateful_return("__tests__/tags/widget/tags/inner/index.marko");
var inner_default = _template("__tests__/tags/widget/tags/inner/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=bump>+</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n;
	_script($scope0_id, "__tests__/tags/widget/tags/inner/index.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/widget/tags/inner/index.marko_fill0", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/widget/tags/inner/index.marko", 0, { n: "1:6" });
	return $return;
});

// tags/widget/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(" b");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/widget/index.marko": /*@__PURE__*/ (() => `__tests__/tags/widget/index.marko${_shell_marker($setup$1)};${((_w0) => `0${_w0}&D l`)(" b")};${((_w0) => `${_w0}<em> </em>`)($template$2)}`)() });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, 1);
	let v = inner_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/widget/index.marko_0_v#3/var");
	_patch_child_end();
	_html(`<em>${_text_resume($scope0_id, "#text/2", v)}</em>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/widget/index.marko", 0);
});

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_patch_child($scope1_id, "#childScope/0", 0);
			widget_default({});
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
