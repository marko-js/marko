// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_html("</div>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// layout.marko
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_set_scope_reason($wg__input_open << 1 | $wg__input_open << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		show: input.open,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<b>shown</b>");
		}, $scope0_id)
	});
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_html("</main>"), _trailers("</body></html>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _write_if($scope0_reason, 1) && _existing_scope($childScope) });
}, 1);

// template.marko
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	layout_default({
		open,
		content: _content("b1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>toggle</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_scope($scope0_id, {
		b: open,
		a: _existing_scope($childScope)
	});
}, 1);
