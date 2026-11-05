// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $v__closures = /* @__PURE__ */ new Set();
	let v = "a";
	_html("<p>x ");
	{
		const $scope1_id = _scope_id();
		{
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "a", v, 2));
			_subscribe($v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0");
		}
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}
	_html(`</p><button>add</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: v,
		d: $v__closures
	});
}, 1);
