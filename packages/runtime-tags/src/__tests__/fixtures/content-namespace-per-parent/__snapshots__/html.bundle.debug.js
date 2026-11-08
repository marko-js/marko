// tags/svg-and-html.marko
var svg_and_html_default = _template("__tests__/tags/svg-and-html.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<svg>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</svg><div>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/svg-and-html.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>Toggle</button>${_el_mark($scope0_id, "#button/0")}<div>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			svg_and_html_default({ content: _content("__tests__/template.marko_2*content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("<a href=#>Link</a>");
			}, $scope1_id) });
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/1", 1, 1, 1, "</div>");
	_script($scope0_id, "__tests__/template.marko_0_show#2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
