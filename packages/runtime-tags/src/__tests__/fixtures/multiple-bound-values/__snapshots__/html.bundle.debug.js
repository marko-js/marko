// tags/2counters.marko
var _2counters_default = _template("__tests__/tags/2counters.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count1 = input.count1;
	let count2 = input.count2;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count1)}</button>${_el_resume($scope0_id, "#button/0")}<button>${_text_resume($scope0_id, "#text/3", count2)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/2counters.marko_0");
	_scope($scope0_id, {
		input_count1: _serialize_if($scope0_reason, 1) && input.count1,
		input_count1Change: _serialize_if($scope0_reason, 0) && input.count1Change,
		input_count2: _serialize_if($scope0_reason, 3) && input.count2,
		input_count2Change: _serialize_if($scope0_reason, 2) && input.count2Change,
		count1,
		count2,
		"TagVariableChange:count1": input.count1Change || void 0,
		"TagVariableChange:count2": input.count2Change || void 0
	}, "__tests__/tags/2counters.marko", 0, {
		input_count1: ["input.count1"],
		input_count1Change: ["input.count1Change"],
		input_count2: ["input.count2"],
		input_count2Change: ["input.count2Change"],
		count1: "1:6",
		count2: "2:6",
		"TagVariableChange:count1": ["count1Change", "1:6"],
		"TagVariableChange:count2": ["count2Change", "2:6"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count1 = 0;
	let count2 = 0;
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	_2counters_default({
		count1,
		count1Change: _resume((_new_count1) => {
			count1 = _new_count1;
		}, "__tests__/template.marko_0/count1Change", $scope0_id),
		count2,
		count2Change: _resume((_new_count2) => {
			count2 = _new_count2;
		}, "__tests__/template.marko_0/count2Change", $scope0_id)
	});
	_html(`<div>${_text_resume($scope0_id, "#text/1", count1)} ${_text_resume($scope0_id, "#text/2", count2, 2)}</div>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
