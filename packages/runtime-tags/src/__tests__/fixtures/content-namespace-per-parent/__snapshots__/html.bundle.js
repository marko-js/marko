// tags/svg-and-html.marko
var svg_and_html_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<svg>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</svg><div>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>Toggle</button>${_el_mark($scope0_id, "a")}<div>`);
	_if(() => {}, $scope0_id, "b", 1, 1, 1, "</div>");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: show });
}, 1);
