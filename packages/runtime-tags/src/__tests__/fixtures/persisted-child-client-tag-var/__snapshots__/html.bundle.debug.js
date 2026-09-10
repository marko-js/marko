// tags/widget/index.marko
const $template$1 = "<em><!> x<!></em><button class=bump>+</button>";
const $walks$1 = "D%c%l b";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko !__tests__/tags/widget/index.marko_0;D%c%l ;<em><!> x<!></em><button class=bump>+</button>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)} x${_text_resume($scope0_id, "#text/1", count, 2)}</em><button class=bump>+</button>${_el_resume($scope0_id, "#button/2")}`);
	const $return = count;
	_script($scope0_id, "__tests__/tags/widget/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/widget/index.marko0", count, 1);
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/tags/widget/index.marko", 0, { count: "1:6" });
	return $return;
}, 0, 0);

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			let w = widget_default({ label: input.label });
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_w#3/var");
			_html(`<p class=echo>${_text_resume($scope1_id, "#text/2", w)}</p>`);
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_label: input.label,
		show
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, () => [widget_default]);
