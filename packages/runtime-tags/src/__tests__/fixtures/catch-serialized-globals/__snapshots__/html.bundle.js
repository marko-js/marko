// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a1", (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		const message = $global().settings.message;
		let clicked = false;
		_html(`<button>${_escape(error.message)}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a0");
		writeScope($scope2_id, {
			e: error?.message,
			f: message,
			g: _serialize_if($scope2_reason, 0) && clicked
		});
		_resume_branch($scope2_id);
	}, $scope0_id) }) });
}, 1);
