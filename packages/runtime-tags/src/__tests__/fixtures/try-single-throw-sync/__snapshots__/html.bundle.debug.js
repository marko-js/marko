// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("Before");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`Inside${_escape((() => {
			throw new Error("ERROR!");
		})())}`);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(err.message)}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "5:3");
	}, $scope0_id) }) });
	_html("After");
}, 1);
