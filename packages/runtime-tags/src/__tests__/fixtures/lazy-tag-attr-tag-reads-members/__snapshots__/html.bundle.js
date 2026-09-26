// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.item.content, {}, 0, 0, $sg__input_item_content);
	_html("</section>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value_a__closures = /* @__PURE__ */ new Set();
	const $value_b__closures = /* @__PURE__ */ new Set();
	let value = {
		a: 1,
		b: 1
	};
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	$Child_withLoadAssets({ item: attrTag({ content: _content("b2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", value.a + value.b));
		_subscribe($value_b__closures, _subscribe($value_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0"), "b1");
	}, $scope0_id) }) });
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		e: value?.a,
		g: $value_a__closures,
		h: $value_b__closures
	});
}, 1);
