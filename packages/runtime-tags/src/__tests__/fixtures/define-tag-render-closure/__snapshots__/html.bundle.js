// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	let x = 1;
	const MyTag = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>${_escape(x)}${_el_resume($scope1_id, "a")}</div>`);
		_subscribe($x__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) };
	MyTag.content({});
	_if(() => {
		{
			const $scope2_id = _scope_id();
			MyTag.content({});
			writeScope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: x,
		Be: $x__closures
	});
	_resume_branch($scope0_id);
}, 1);
