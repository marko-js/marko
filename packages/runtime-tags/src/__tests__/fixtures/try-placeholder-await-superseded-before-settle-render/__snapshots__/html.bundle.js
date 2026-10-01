// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.value, (value) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", value, $wg__input_value));
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, $wg__input_value);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	let value = "idle";
	_html(`<button id=first>first</button>${_el_resume($scope0_id, "a")}<button id=third>third</button>${_el_resume($scope0_id, "b")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		child_default({ value });
		_subscribe($value__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a0");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("LOADING");
	}, void 0, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: value,
		e: $value__closures
	});
}, 1);
