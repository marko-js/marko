// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = /* @__PURE__ */ new Set();
	let clickCount = 0;
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>inc</button>${_el_resume($scope1_id, "a")} -- ${_text_resume($scope1_id, "b", void 0, 2)}`);
		_script($scope1_id, "a2");
		_script($scope1_id, "a3");
		_subscribe($clickCount__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", err, $sg__err));
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) });
	_scope($scope0_id, {
		c: clickCount,
		d: $clickCount__closures
	});
}, 1);
