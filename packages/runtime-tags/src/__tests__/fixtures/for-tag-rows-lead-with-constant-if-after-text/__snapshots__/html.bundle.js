// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<p>x");
	forOf([1, 2], (i) => {
		const $scope1_id = _scope_id();
		{
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "a", n, 2));
			_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	});
	_html(`</p><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: n,
		d: $n__closures
	});
}, 1);
