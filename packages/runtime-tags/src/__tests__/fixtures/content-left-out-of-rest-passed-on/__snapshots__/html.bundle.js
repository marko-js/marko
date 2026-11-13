// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wg__rest = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { content, ...rest } = input;
	_html("<p>");
	_dynamic_tag($scope0_id, "a", content, {}, 0, 0, $wg__input_content);
	_html(`</p><pre>${_text_mark($scope0_id, "b", JSON.stringify(rest), $wg__rest)}</pre>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	child_default({
		label: "a",
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", n));
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id)
	});
	_html(`<button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
