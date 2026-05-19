// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const ChildA = { content: _content("a0", ({ id, foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__foo = _serialize_guard($scope1_reason, 1);
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: count + 2 };
		const bar = void 0 !== $bar ? $bar : count + 1;
		_html(`<div${_attr("id", id)} class=a>${_escape(bar)}${_el_resume($scope1_id, "b")} ${_sep($sg__foo)}${_escape(typeof foo)}${_el_resume($scope1_id, "c", $sg__foo)}</div>${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 0))}`);
		_subscribe($count__closures, writeScope($scope1_id, {
			g: foo,
			_: _scope_with_id($scope0_id)
		}));
		_resume_branch($scope1_id);
	}) };
	ChildA.content({
		foo: { bar: 0 },
		id: "a"
	});
	ChildA.content({
		foo: {},
		id: "b"
	});
	ChildA.content({ id: "c" });
	const ChildB = { content: _content("a1", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__foo2 = _serialize_guard($scope2_reason, 1);
		const { foo, foo: $foo2 } = input;
		const { bar: $bar2 } = void 0 !== $foo2 ? $foo2 : { bar: count + 2 };
		const bar = void 0 !== $bar2 ? $bar2 : count + 1;
		_html(`<div${_attr("id", input.id)} class=b>${_escape(bar)}${_el_resume($scope2_id, "b")} ${_sep($sg__foo2)}${_escape(typeof foo)}${_el_resume($scope2_id, "c", $sg__foo2)}</div>${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 0))}`);
		_subscribe($count__closures, writeScope($scope2_id, {
			g: foo,
			_: _scope_with_id($scope0_id),
			Ch: 1
		}));
		_resume_branch($scope2_id);
	}) };
	ChildB.content({
		foo: { bar: 0 },
		id: "d"
	});
	ChildB.content({
		foo: {},
		id: "e"
	});
	ChildB.content({ id: "f" });
	_html(`<button>Increment default</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		h: count,
		Bh: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
