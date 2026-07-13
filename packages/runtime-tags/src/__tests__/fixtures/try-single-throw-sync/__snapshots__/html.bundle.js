// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("Before");
	_try($scope0_id, "a", _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html(`Inside${_escape((() => {
			throw new Error("ERROR!");
		})())}`);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(err.message)}${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}, $scope0_id) }) });
	_html("After");
}, 1);
