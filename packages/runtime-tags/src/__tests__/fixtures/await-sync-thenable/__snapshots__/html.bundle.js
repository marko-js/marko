// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 1;
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", { then(resolve) {
			resolve(n);
		} }, (value) => {
			const $scope3_id = _scope_id();
			_html(`value ${_text_resume($scope3_id, "a", value, 2)}`);
			_scope($scope3_id, {});
		});
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) });
	_html(`<div>after</div><button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
