// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const D = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope1_id, "a", n, 2));
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_html("<span>Hi ");
	D.content({});
	_html(`</span><button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
