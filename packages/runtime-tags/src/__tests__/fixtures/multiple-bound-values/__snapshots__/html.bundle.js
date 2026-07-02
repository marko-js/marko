// tags/2counters.marko
var _2counters_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count1 = input.count1;
	let count2 = input.count2;
	_html(`<button>${_escape(count1)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button>${_escape(count2)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		g: _serialize_if($scope0_reason, 1) && input.count1,
		h: _serialize_if($scope0_reason, 0) && input.count1Change,
		j: _serialize_if($scope0_reason, 3) && input.count2,
		k: _serialize_if($scope0_reason, 2) && input.count2Change,
		m: count1,
		n: count2,
		Mm: input.count1Change || void 0,
		Mn: input.count2Change || void 0
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count1 = 0;
	let count2 = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(10);
	_2counters_default({
		count1,
		count1Change: _resume((_new_count1) => {
			count1 = _new_count1;
		}, "a0", $scope0_id),
		count2,
		count2Change: _resume((_new_count2) => {
			count2 = _new_count2;
		}, "a1", $scope0_id)
	});
	_html(`<div>${_escape(count1)}${_el_resume($scope0_id, "b")} <!>${_escape(count2)}${_el_resume($scope0_id, "c")}</div>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
