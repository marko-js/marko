// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const X = { content: _content("__tests__/template.marko_1*content", (a, opts) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__opts_content = _write_guard($scope1_reason, 0);
		_html("<div class=box>");
		_dynamic_tag($scope1_id, "#text/0", opts.content, {}, 0, 0, $wg__opts_content);
		_html("</div>");
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	X.content(void 0, { content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("hi");
	}, $scope0_id) });
	_html(`<button>click</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
