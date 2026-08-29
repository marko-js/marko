// tags/widget/helper.ts
function format(label) {
	return `!${label}!`;
}

// tags/widget/index.marko
const $template$1 = "<p><!><!></p><button class=run>run</button>";
const $walks$1 = "D%b%l b";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko !__tests__/tags/widget/index.marko_0;D%b%l ;<p><!><!></p><button class=run>run</button>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}${_text_resume($scope0_id, "#text/1", last, 2)}</p><button class=run>run</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/widget/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/widget/index.marko0", last, 1);
	$scope0_reason ? _scope($scope0_id, { input_label: input.label }, "__tests__/tags/widget/index.marko", 0, { input_label: ["input.label"] }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_label", input.label);
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = "<main><!><button class=outer>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			widget_default({ label: input.label });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=outer>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_label: input.label,
		show
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
	_resume_branch($scope0_id);
}, 1, () => [widget_default]);
