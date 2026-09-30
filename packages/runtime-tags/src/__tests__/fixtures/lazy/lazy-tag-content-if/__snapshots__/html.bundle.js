// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</section>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	$Child_withLoadAssets({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_html("shown");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0");
	}, $scope0_id) });
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		d: show,
		e: $show__closures
	});
}, 1);
