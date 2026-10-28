// layout.marko
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_nav__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_content = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_dynamic_tag($scope0_id, "a", input.nav, { label: input.label }, 0, 0, $wg__input_nav__OR__input_label);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_html("</main>"), _trailers("</body></html>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		e: _write_if($scope0_reason, 3) && input.nav,
		f: _write_if($scope0_reason, 2) && input.label
	});
}, 1);

// nav-a.marko
var nav_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<nav>A ${_text_resume($scope0_id, "a", input.label, $wg__input_label * 2)}</nav>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// nav-b.marko
var nav_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<nav>B ${_text_resume($scope0_id, "a", input.label, $wg__input_label * 2)}</nav>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let alt = false;
	_set_scope_reason(42 | _write_guard($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id();
	layout_default({
		nav: nav_a_default,
		label: input.label,
		content: _content("d1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>swap</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "d0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	_scope($scope0_id, {
		e: alt,
		a: _existing_scope($childScope)
	});
}, 1);
