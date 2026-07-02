// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let state = input.value;
	let otherState = input["value"];
	let thirdState = input.value;
	_html(`<button>${_escape(input.value)}${_el_resume($scope0_id, "b", $sg__input_value)}|<!>${_escape(state)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}<button>${_escape(input.value)}${_el_resume($scope0_id, "e", $sg__input_value)}|<!>${_escape(otherState)}${_el_resume($scope0_id, "f")}</button>${_el_resume($scope0_id, "d")}<button>${_escape(input.value)}${_el_resume($scope0_id, "h", $sg__input_value)}|<!>${_escape(thirdState)}${_el_resume($scope0_id, "i")}</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		l: _serialize_if($scope0_reason, 1) && input.value,
		m: _serialize_if($scope0_reason, 0) && input.valueChange,
		o: state,
		p: otherState,
		q: thirdState,
		Mo: input.valueChange || void 0,
		Mp: input["valueChange"] || void 0,
		Mq: input.valueChange || void 0
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let source = 1;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	child_default({
		value: source,
		valueChange: _resume((_new_source) => {
			source = _new_source;
		}, "a0", $scope0_id)
	});
	_html(`source=<!>${_escape(source)}${_el_resume($scope0_id, "b")}`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
