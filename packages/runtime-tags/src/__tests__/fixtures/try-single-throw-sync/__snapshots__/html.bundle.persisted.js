// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("Before");
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`Inside${_escape((() => {
			throw new Error("ERROR!");
		})())}${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {});
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(err.message)}${_el_resume($scope2_id, "a")}`);
		writeScope($scope2_id, { d: _serialize_if($scope2_reason, 0) && err?.message });
	}, $scope0_id) }) });
	_html("After");
	writeScope($scope0_id, {});
}, 1);
