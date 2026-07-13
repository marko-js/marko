// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $changes__closures = /* @__PURE__ */ new Set();
	let changes = 0;
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("outer", 1), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a2");
			_try($scope2_id, "a", _content_resume("a1", () => {
				const $scope4_id = _scope_id();
				_scope_reason();
				_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 2), () => {
					_scope_id();
					_html("never");
				}, 0);
			}, $scope2_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught: ${_sep($sg__err_message)}${_escape(err.message)}${_el_resume($scope5_id, "a", $sg__err_message)}`);
				_serialize_if($scope5_reason, 0) && writeScope($scope5_id, {});
			}, $scope2_id) }) });
			_html(`<div>changes: <!>${_escape(changes)}${_el_resume($scope2_id, "c")}</div>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a3");
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("loading outer...");
	}, $scope0_id) }) });
	writeScope($scope0_id, {
		b: changes,
		c: $changes__closures
	});
	_resume_branch($scope0_id);
}, 1);
