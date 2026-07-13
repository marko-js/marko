// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_escape((() => {
			throw new Error("ERROR!");
		})()));
		_script($scope1_id, "a2");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(err.message)}${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}, $scope0_id) }) });
	_html(`<div></div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {});
}, 1);
