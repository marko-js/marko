// tags/widget/helper.ts
function format(label) {
	return `!${label}!`;
}

// tags/widget/index.marko
const $template$1 = "<p><!><!></p><button class=run>run</button>";
const $walks$1 = "D%b%l b";
const $setup$1 = [[], ["__tests__/tags/widget/index.marko_0"]];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko !__tests__/tags/widget/index.marko_0;D%b%l ;<p><!><!></p><button class=run>run</button>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}${_text_resume($scope0_id, "#text/1", last, 2, 0, 0, 1)}</p><button class=run>run</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/widget/index.marko_0");
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/widget/index.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<main><!><button class=outer>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			widget_default({ label: input.label });
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=outer>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		show
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		show: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
