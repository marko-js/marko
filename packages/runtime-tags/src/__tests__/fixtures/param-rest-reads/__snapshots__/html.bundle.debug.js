// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [
		1,
		2,
		3
	], 0, 1, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	forOf(list, (item, ...meta) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(item)}:${_escape(meta[0])}:${_escape(meta.length)}</div>`);
	});
	forOf(list, (item, ...[idx]) => {
		const $scope2_id = _scope_id();
		_html(`<div>${_escape(item)}@${_escape(idx)}</div>`);
	});
	child_default({ content: _content("__tests__/template.marko_3*content", (first, ...others) => {
		const $scope3_reason = _scope_reason(), $sg__$params4_ = _serialize_guard($scope3_reason, 2), $sg__$params4_2 = _serialize_guard($scope3_reason, 3), $sg__others_length = _serialize_guard($scope3_reason, 4);
		const $scope3_id = _scope_id();
		_html(`<div>${_escape(first)}${_el_resume($scope3_id, "#text/0", _serialize_guard($scope3_reason, 1))}|${_sep($sg__$params4_)}${_escape(others[0])}${_el_resume($scope3_id, "#text/1", $sg__$params4_)}|${_sep($sg__$params4_2)}${_escape(others[1])}${_el_resume($scope3_id, "#text/2", $sg__$params4_2)}|${_sep($sg__others_length)}${_escape(others.length)}${_el_resume($scope3_id, "#text/3", $sg__others_length)}</div>`);
		_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {}, "__tests__/template.marko", "8:2");
	}) });
	child_default({ content: _content("__tests__/template.marko_4*content", (x, ...[y, z]) => {
		const $scope4_reason = _scope_reason(), $sg__y = _serialize_guard($scope4_reason, 2), $sg__z = _serialize_guard($scope4_reason, 3);
		const $scope4_id = _scope_id();
		_html(`<div>${_escape(x)}${_el_resume($scope4_id, "#text/0", _serialize_guard($scope4_reason, 1))}-${_sep($sg__y)}${_escape(y)}${_el_resume($scope4_id, "#text/1", $sg__y)}-${_sep($sg__z)}${_escape(z)}${_el_resume($scope4_id, "#text/2", $sg__z)}</div>`);
		_serialize_if($scope4_reason, 0) && writeScope($scope4_id, {}, "__tests__/template.marko", "11:2");
	}) });
	_resume_branch($scope0_id);
}, 1);
