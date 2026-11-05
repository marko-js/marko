// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<p>x");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "a", n));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("oops");
	}, 0, "a1");
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
