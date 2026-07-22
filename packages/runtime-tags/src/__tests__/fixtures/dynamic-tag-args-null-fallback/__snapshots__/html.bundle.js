// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_ = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>tag ${_sep($sg__input_)}${_escape(input[0])}${_el_resume($scope0_id, "a", $sg__input_)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = null;
	_dynamic_tag($scope0_id, "a", x, [
		1,
		2,
		{ content: _content_resume("a0", () => {
			_scope_id();
			_scope_reason();
			_html("Fallback Body");
		}, $scope0_id) }
	], _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Fallback Body");
	}, $scope0_id), 1);
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { c: x });
	_resume_branch($scope0_id);
}, 1);
