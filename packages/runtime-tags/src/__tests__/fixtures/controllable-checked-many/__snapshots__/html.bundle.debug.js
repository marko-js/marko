// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let states = [
		false,
		false,
		false
	];
	_for_of(states, (state, i) => {
		const $scope1_id = _scope_id();
		let checked = state;
		_html(`<input${_attr_input_checked($scope1_id, "#input/0", checked, _resume((_new_checked) => {
			checked = _new_checked;
		}, "__tests__/template.marko_1/checkedChange", $scope1_id))} type=checkbox>${_el_resume($scope1_id, "#input/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			"#LoopKey": i,
			"TagVariableChange:checked": _resume(function(value) {
				if (i === undefined) {
					throw new Error("LoopKey is undefined");
				}
				const newStates = [...states];
				newStates[i] = value;
				states = newStates;
			}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0
		}, "__tests__/template.marko", "2:2", { "#LoopKey": "2:13" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<div>${_escape(states.join(","))}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, { states }, "__tests__/template.marko", 0, { states: "1:6" });
	_resume_branch($scope0_id);
}, 1);
