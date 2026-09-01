// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let tag = input.tag;
	let n = 0;
	_html(`<button id=swap>swap</button>${_el_resume($scope0_id, "a")}<button id=bump>bump</button>${_el_resume($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "c", tag, { value: "b" }, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<option${_attr_option_value("a")}>A${_text_resume($scope1_id, "a", n, 2)}</option>`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: tag,
		h: n,
		i: $n__closures
	});
	_resume_branch($scope0_id);
}, 1);
