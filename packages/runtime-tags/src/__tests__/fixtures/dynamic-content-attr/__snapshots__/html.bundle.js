// template.marko
let sideEffect = 3;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const MyThing = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_escape(count)}${_el_resume($scope1_id, "a")} ${_escape(sideEffect++)}`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<button>");
	_attr_content("a", $scope0_id, MyThing);
	_html(`</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		b: count,
		c: MyThing,
		Bb: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
