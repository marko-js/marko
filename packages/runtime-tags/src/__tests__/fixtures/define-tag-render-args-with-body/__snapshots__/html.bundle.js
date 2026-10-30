// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	({ content: _content("a0", (a, opts) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__opts_content = _write_guard($scope1_reason, 0);
		_html("<div class=box>");
		_dynamic_tag($scope1_id, "a", opts.content, {}, 0, 0, $wg__opts_content);
		_html("</div>");
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) }).content(void 0, { content: _content("a1", () => {
		_scope_reason();
		_scope_id();
		_html("hi");
	}, $scope0_id) });
	_html(`<button>click</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: n });
}, 1);
