// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	let show = false;
	const label = "off";
	const Box = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", label)}</em>`);
		_subscribe($label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", null, {});
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		e: Box,
		g: $label__closures
	});
}, 1);
