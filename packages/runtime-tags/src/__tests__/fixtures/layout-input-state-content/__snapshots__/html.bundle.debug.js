// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_html("</div>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] });
});

// layout.marko
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.open,
		content: _content_resume("__tests__/layout.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("<b>shown</b>");
		}, $scope0_id)
	});
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_html("</main>"), _trailers("</body></html>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/layout.marko", 0);
}, 1);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	layout_default({
		open,
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>toggle</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
		}, $scope0_id)
	});
	_scope($scope0_id, {
		open,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "2:6" });
}, 1);
