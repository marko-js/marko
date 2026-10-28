// lazy.marko
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<b>lazy</b>");
});

// layout.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko");
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 1), $wg__input_content = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			$Lazy_withLoadAssets({});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/layout.marko", "4:6");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_open, $wg__input_open);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $wg__input_content);
	_trailers("</body></html>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/layout.marko", 0);
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
