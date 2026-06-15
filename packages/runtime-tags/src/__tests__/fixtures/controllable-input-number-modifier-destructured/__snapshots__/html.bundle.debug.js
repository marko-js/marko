// tags/my-input.marko
function num(v) {
	return +v;
}
var my_input_default = _template("__tests__/tags/my-input.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { "countChange": $countChange, count } = input;
	_html(`<input${_attr_input_value($scope0_id, "#input/0", count, $countChange && _resume(($next) => {
		$countChange(num($next));
	}, "__tests__/tags/my-input.marko_0/valueChange", $scope0_id))} type=number>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/my-input.marko_0");
	writeScope($scope0_id, {
		$countChange,
		count: _serialize_if($scope0_reason, 0) && count
	}, "__tests__/tags/my-input.marko", 0, {
		$countChange: 0,
		count: "4:10"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	my_input_default({
		count: value,
		countChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/countChange", $scope0_id)
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "#text/1")} <!>${_escape(typeof value)}${_el_resume($scope0_id, "#text/2")}</span>`);
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
