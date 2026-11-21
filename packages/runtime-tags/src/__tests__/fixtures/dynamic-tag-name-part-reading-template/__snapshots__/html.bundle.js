// tags/a.marko
var a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>A ${_text_mark($scope0_id, "a", input.label, _write_guard($scope0_reason, 0) * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/b.marko
var b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>B ${_text_mark($scope0_id, "a", input.label, _write_guard($scope0_reason, 1) * 2)} `);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 3), $wi__input_name = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_name__closures = /* @__PURE__ */ new Set();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.tag !== b_default && a_default, { label: "left" }, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.name, $wg__input_name));
		_write_if($scope0_reason, 0) && _subscribe($wi__input_name && $input_name__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_name);
	}, $scope0_id), 0, _write_guard($scope0_reason, 2));
	_html("</div>");
	_dynamic_tag($scope0_id, "b", input.a ? a_default : b_default ? 1 : 2, { label: "alternate" }, _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("Hello");
	}, $scope0_id), 0, _write_guard($scope0_reason, 4));
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && input.name,
		h: $wi__input_name && $input_name__closures
	});
}, 1);
