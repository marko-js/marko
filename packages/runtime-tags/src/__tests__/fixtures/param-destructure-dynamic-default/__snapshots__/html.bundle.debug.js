// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const ChildA = { content: _content("__tests__/template.marko_1_content", ({ id, foo, foo: $foo }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__foo = _serialize_guard($scope1_reason, 1);
		const { bar: $bar } = void 0 !== $foo ? $foo : { bar: count + 2 };
		const bar = void 0 !== $bar ? $bar : count + 1;
		_html(`<div${_attr("id", id)} class=a>${_escape(bar)}${_el_resume($scope1_id, "#text/1")} ${_sep($sg__foo)}${_escape(typeof foo)}${_el_resume($scope1_id, "#text/2", $sg__foo)}</div>${_el_resume($scope1_id, "#div/0", _serialize_guard($scope1_reason, 0))}`);
		_subscribe($count__closures, writeScope($scope1_id, {
			foo,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:1", { foo: "2:21" }));
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
	const ChildB = { content: _content("__tests__/template.marko_2_content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__foo2 = _serialize_guard($scope2_reason, 1);
		const { foo, foo: $foo2 } = input;
		const { bar: $bar2 } = void 0 !== $foo2 ? $foo2 : { bar: count + 2 };
		const bar = void 0 !== $bar2 ? $bar2 : count + 1;
		_html(`<div${_attr("id", input.id)} class=b>${_escape(bar)}${_el_resume($scope2_id, "#text/1")} ${_sep($sg__foo2)}${_escape(typeof foo)}${_el_resume($scope2_id, "#text/2", $sg__foo2)}</div>${_el_resume($scope2_id, "#div/0", _serialize_guard($scope2_reason, 0))}`);
		_subscribe($count__closures, writeScope($scope2_id, {
			foo,
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count": 1
		}, "__tests__/template.marko", "9:1", { foo: "10:11" }));
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
	_html(`<button>Increment default</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:5" });
	_resume_branch($scope0_id);
}, 1);
