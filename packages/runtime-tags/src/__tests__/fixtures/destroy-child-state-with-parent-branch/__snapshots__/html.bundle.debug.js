// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_value#2_$valueChange#3", 0);
	_scope($scope0_id, {
		value: input.value,
		$valueChange: input.valueChange
	}, "__tests__/tags/child.marko", 0, {
		value: "1:10",
		$valueChange: "5:5"
	});
});

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $childScope = _peek_scope_id();
	child_default({
		value: count,
		valueChange: _resume((_new_count) => count = _new_count, "__tests__/tags/counter.marko_0/valueChange", $scope0_id)
	});
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/counter.marko", 0);
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			counter_default({});
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>hide</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
