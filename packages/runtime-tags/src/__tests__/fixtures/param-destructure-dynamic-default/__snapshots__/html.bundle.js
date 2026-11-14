// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const ChildA = { content: _content("a0", ({ id, foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: 2 };
		const bar = void 0 !== $bar ? $bar : 1;
		_html(`<div${_attr("id", id)} class=a>${_text_mark($scope1_id, "b", bar)} ${_escape(typeof foo)}</div>`);
		_subscribe($count__closures, _scope($scope1_id, {
			g: foo,
			_: _scope_with_id($scope0_id)
		}), "a1");
	}, $scope0_id) };
	ChildA.content({
		foo: { bar: 0 },
		id: "a"
	});
	ChildA.content({
		foo: {},
		id: "b"
	});
	ChildA.content({ id: "c" });
	const ChildB = { content: _content("a2", (input) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const { bar: $bar2 } = void 0 !== input.foo ? input.foo : { bar: 2 };
		const bar = void 0 !== $bar2 ? $bar2 : 1;
		_html(`<div${_attr("id", input.id)} class=b>${_text_mark($scope2_id, "b", bar)} ${_escape(typeof input.foo)}</div>`);
		_subscribe($count__closures, _scope($scope2_id, {
			g: input.foo,
			_: _scope_with_id($scope0_id),
			Ci: 1
		}), "a3");
	}, $scope0_id) };
	ChildB.content({
		foo: { bar: 0 },
		id: "d"
	});
	ChildB.content({
		foo: {},
		id: "e"
	});
	ChildB.content({ id: "f" });
	_html(`<button>Increment default</button>${_el_mark($scope0_id, "g")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		h: count,
		i: $count__closures
	});
}, 1);
