// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 10;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", x)},${_text_resume($scope0_id, "c", y, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "d", input.content, [x, y], 0, 1);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		g: input.content,
		h: x,
		i: y
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	custom_tag_default({ content: _content_resume("a0", (count, count2) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<div>Counts: ${_text_resume($scope1_id, "a", count, _serialize_guard($scope1_reason, 1) * 2)},${_text_resume($scope1_id, "b", count2, _serialize_guard($scope1_reason, 2) * 2)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}, _scope_id()) });
}, 1);
