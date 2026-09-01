// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>tag ${_text_resume($scope0_id, "#text/0", input[0], _serialize_guard($scope0_reason, 0) * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = null;
	_dynamic_tag($scope0_id, "#text/0", x, [
		1,
		2,
		{ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_id = _scope_id();
			_scope_reason();
			_html("Fallback Body");
		}, $scope0_id) }
	], _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Fallback Body");
	}, $scope0_id), 1);
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "2:6" });
	_resume_branch($scope0_id);
}, 1);
