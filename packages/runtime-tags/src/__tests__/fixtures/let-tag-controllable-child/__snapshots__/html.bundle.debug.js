// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let state = input.value;
	let otherState = input["value"];
	let thirdState = input.value;
	_html(`<button>${_escape(input.value)}${_el_resume($scope0_id, "#text/1", $sg__input_value)}|<!>${_escape(state)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}<button>${_escape(input.value)}${_el_resume($scope0_id, "#text/4", $sg__input_value)}|<!>${_escape(otherState)}${_el_resume($scope0_id, "#text/5")}</button>${_el_resume($scope0_id, "#button/3")}<button>${_escape(input.value)}${_el_resume($scope0_id, "#text/7", $sg__input_value)}|<!>${_escape(thirdState)}${_el_resume($scope0_id, "#text/8")}</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_thirdState");
	_script($scope0_id, "__tests__/tags/child.marko_0_otherState");
	_script($scope0_id, "__tests__/tags/child.marko_0_state");
	writeScope($scope0_id, {
		input_value: _serialize_if($scope0_reason, 1) && input.value,
		input_valueChange: _serialize_if($scope0_reason, 0) && input.valueChange,
		state,
		otherState,
		thirdState,
		"TagVariableChange:state": input.valueChange || void 0,
		"TagVariableChange:otherState": input["value" + "Change"] || void 0,
		"TagVariableChange:thirdState": input.valueChange || void 0
	}, "__tests__/tags/child.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		state: "1:6",
		otherState: "6:6",
		thirdState: "11:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let source = 1;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_default({
		value: source,
		valueChange: _resume((_new_source) => {
			source = _new_source;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`source=<!>${_escape(source)}${_el_resume($scope0_id, "#text/1")}`);
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
