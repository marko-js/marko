// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "a0", $wg__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(void 0, 1), (_) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", $Child_withLoadAssets, { value: 1 });
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading...");
	}, void 0, "b1");
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		c: show,
		d: $show__closures
	});
}, 1);
