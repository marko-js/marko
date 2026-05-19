// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.content, {
		count: x,
		name: input.name
	});
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		f: input.content,
		g: input.name,
		h: x
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	custom_tag_default({
		name: "hello",
		content: _content_resume("a0", ({ count, name }) => {
			const $scope1_reason = _scope_reason(), $sg__name = _serialize_guard($scope1_reason, 2), $sg__count = _serialize_guard($scope1_reason, 1);
			const $scope1_id = _scope_id();
			_html(`<div>Count (${_sep($sg__name)}${_escape(name)}${_el_resume($scope1_id, "a", $sg__name)}): ${_sep($sg__count)}${_escape(count)}${_el_resume($scope1_id, "b", $sg__count)}</div>`);
			_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
		}, $scope0_id)
	});
}, 1);
