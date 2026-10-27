// layout.marko
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $wg__input_content = _write_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.a + input.b, $wg__input_a__OR__input_b)}</p>`);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 3), $wg__input_show, 0, 0, 1);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_html("</main>"), _trailers("</body></html>");
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.a,
		g: _write_if($scope0_reason, 0) && input.b
	});
}, 1);

// template.marko
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let a = 1;
	_set_scope_reason(674 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 1) << 11));
	const $childScope = _peek_scope_id();
	layout_default({
		a,
		b: input.b,
		show: input.show,
		content: _content("b1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>inc</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_scope($scope0_id, {
		f: a,
		a: _existing_scope($childScope)
	});
}, 1);
