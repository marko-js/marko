// template.marko
_shells({ a0: ",`a0; D ;<option> </option>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_attr_select_value($scope0_id, "a", input.picked, void 0, () => {
		_html(`<select${_patch_control($scope0_id, "a", 3, input.picked, $scope0_owned, 0)}>`);
		_for_of(input.options, (o) => {
			const $scope1_id = _scope_id();
			_html(`<option${_patch_attr_option_value($scope1_id, "a", o.value, $scope0_owned, 1)}>${_patch_text($scope1_id, "b", o.label, $scope0_owned, 1)}${_el_resume($scope1_id, "b")}</option>${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, {});
		}, (o) => o.id, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 1), void 0, void 0, "a0");
		_html("</select>");
	});
	_html(`${_el_resume($scope0_id, "a")}<select id=plain><option${_attr_option_value("a")}${_patch_attr($scope0_id, "b", "selected", input.pick === "a", $scope0_owned, 2)}>A</option>${_el_resume($scope0_id, "b")}<option${_attr_option_value("b")}${_patch_attr($scope0_id, "c", "selected", input.pick === "b", $scope0_owned, 2)}>B</option>${_el_resume($scope0_id, "c")}</select><em>${_escape(count)}${_el_resume($scope0_id, "d")}</em><button>+</button>${_el_resume($scope0_id, "e")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, { k: count });
	_resume_branch($scope0_id);
}, 1, 0);
