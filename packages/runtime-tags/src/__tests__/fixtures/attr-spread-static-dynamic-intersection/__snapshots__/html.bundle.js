// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Stat = { content: _content("a1", () => {
		_scope_id();
		_scope_reason();
		return { class: "foo" };
	}) };
	const Dyn = { content: _content("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let count = 0;
		const $return2 = {
			"data-count": count,
			onClick: _resume(function() {
				count++;
			}, "a0", $scope2_id)
		};
		writeScope($scope2_id, { a: count });
		_resume_branch($scope2_id);
		return $return2;
	}) };
	let staticAttrs = Stat.content({});
	const $childScope = _peek_scope_id();
	let dynamicAttrs = Dyn.content({});
	_var($scope0_id, "d", $childScope, "a3");
	_html(`<button${_attrs({
		...staticAttrs,
		...dynamicAttrs
	}, "e", $scope0_id, "button")}>Click</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		f: staticAttrs,
		c: _existing_scope($childScope)
	});
}, 1);
