// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<b>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</b>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<div>x");
	_dynamic_tag($scope0_id, "a", input.show ? child_default : null, {}, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", n, 2));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id), 0, _write_guard($scope0_reason, 0));
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: n,
		g: $n__closures
	});
}, 1);
