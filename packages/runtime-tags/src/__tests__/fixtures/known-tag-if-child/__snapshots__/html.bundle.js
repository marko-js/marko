// components/wrapper.marko
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</section>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $on__closures = /* @__PURE__ */ new Set();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	wrapper_default({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_html("<i>off</i>");
				_scope($scope3_id, {});
				return 1;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_subscribe($on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: on,
		d: $on__closures
	});
}, 1);
