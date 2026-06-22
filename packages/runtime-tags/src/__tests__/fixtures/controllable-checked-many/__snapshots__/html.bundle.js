// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<input${_attr_input_checked($scope1_id, "a", checked, _resume((_new_checked) => {
			checked = _new_checked;
		}, "a1", $scope1_id))} type=checkbox>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, {
			M: i,
			_: _scope_with_id($scope0_id),
			Mg: _resume(function(value) {
				if (i === void 0) throw new Error("LoopKey is undefined");
				const newStates = [...states];
				newStates[i] = value;
				states = newStates;
			}, "a0", $scope1_id) || void 0
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1, 1);
	_html(`<div>${_escape(states.join(","))}${_el_resume($scope0_id, "b")}</div>`);
	writeScope($scope0_id, { c: states });
	_resume_branch($scope0_id);
}, 1);
