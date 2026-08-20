// tags/field/index.marko
const $template$1 = "<input><em> </em>";
const $walks$1 = " bD l";
_shells({ "__tests__/tags/field/index.marko": "__tests__/tags/field/index.marko !__tests__/tags/field/index.marko_0; bD ;<input><em> </em>" });
var field_default = _template_persisted("__tests__/tags/field/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let v = "";
	_html(`<input${_attr_input_value($scope0_id, "#input/0", v, _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/tags/field/index.marko_0/valueChange", $scope0_id))}${_patch_bind($scope0_id, "ControlledHandler:#input/0", _resume((_new_v) => {
		v = _new_v;
	}, "__tests__/tags/field/index.marko_0/valueChange", $scope0_id))}${_patch_control($scope0_id, "#input/0", 2, v)}>${_el_resume($scope0_id, "#input/0")}<em>${_escape(v)}${_el_resume($scope0_id, "#text/1")}</em>`);
	_script($scope0_id, "__tests__/tags/field/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/field/index.marko0", v, 1);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/field/index.marko", 0, { "ControlledHandler:#input/0": ["valueChange"] });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			field_default({});
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [field_default]);
