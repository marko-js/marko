// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $depth__closures = /* @__PURE__ */ new Set();
	let depth = 1;
	const label = "node";
	const Tree = { content: _content("a0", ({ level }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>${_escape(label)}${_escape(level)}</span>`);
		_if(() => {
			if (level < depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Tree.content({ level: level + 1 });
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "c");
		_subscribe($depth__closures, _scope($scope1_id, {
			f: level,
			_: _scope_with_id($scope0_id)
		}), "a1");
	}, $scope0_id) };
	_html(`<button>deeper</button>${_el_mark($scope0_id, "a")}`);
	Tree.content({ level: 1 });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: depth,
		d: label,
		e: $depth__closures
	});
}, 1);
