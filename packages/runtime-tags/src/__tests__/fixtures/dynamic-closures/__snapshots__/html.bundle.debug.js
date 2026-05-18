// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});

// template.marko
const a = 1;
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = new Set();
	const b = 2;
	let c = 3;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	custom_tag_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`${_escape(a)} ${_escape(b)} <!>${_escape(c)}${_el_resume($scope1_id, "#text/2")}`);
		_subscribe($c__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"));
		_resume_branch($scope1_id);
	}) });
	_html("<div>");
	if (Math.random()) {
		const $scope2_id = _scope_id();
		if (Math.random()) {
			const $scope3_id = _scope_id();
			_html(`${_escape(a)} ${_escape(b)} <!>${_escape(c)}${_el_resume($scope3_id, "#text/2")}`);
			_subscribe($c__closures, writeScope($scope3_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:c": 1
			}, "__tests__/template.marko", "11:6"));
		}
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:4");
	}
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "ClosureScopes:c": $c__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
