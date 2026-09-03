// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span id=child>${_text_resume($scope0_id, "a", input.value, $sg__input_value)}</span>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {}, $scope1_id, "a");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("b0", () => {
			_scope_reason();
			_scope_id();
			_html("<div id=loading>loading</div>");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("b1", (err) => {
			const $scope3_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`<div id=error>${_text_resume($scope3_id, "a", err.message, $sg__err_message)}</div>`);
			_serialize_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, $scope0_id) })
	});
	_script($scope0_id, "b3");
	_scope($scope0_id, { d: $show__closures });
}, 1);
