// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = 0;
	_html(`<button>${_text_resume($scope0_id, "b", value)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("server"), 1), (v) => {
			const $scope4_id = _scope_id();
			_html(`<div>${_text_resume($scope4_id, "a", v)}</div>`);
			_scope($scope4_id, {});
		});
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", 0);
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("loading");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("a1", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`caught ${_text_resume($scope3_id, "a", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, $scope0_id) })
	});
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: value,
		e: $value__closures
	});
}, 1);
