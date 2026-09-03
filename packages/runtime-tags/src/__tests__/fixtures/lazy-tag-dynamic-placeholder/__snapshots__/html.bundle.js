// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 1), $sg__input_value = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.label, $sg__input_label)}: ${_text_resume($scope0_id, "b", input.value, $sg__input_value * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	const $value__closures = /* @__PURE__ */ new Set();
	let show = true;
	let value = 1;
	_html(`<button class=toggle>Toggle</button>${_el_resume($scope0_id, "a")}<button class=inc>Inc</button>${_el_resume($scope0_id, "b")}`);
	_try($scope0_id, "c", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", $Child_withLoadAssets, {
			label: "x",
			value
		});
		_subscribe($value__closures, _subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		d: show,
		e: value,
		f: $show__closures,
		g: $value__closures
	});
}, 1);
