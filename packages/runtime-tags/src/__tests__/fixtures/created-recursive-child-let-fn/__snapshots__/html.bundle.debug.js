// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "#text/1", f())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth__OR__input_fn = _write_guard($scope0_reason, 0), $wg__input_fn = _write_guard($scope0_reason, 2), $wg__input_depth = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ fn: input.fn });
			_set_scope_reason($wg__input_depth__OR__input_fn << 1 | $wg__input_depth << 3 | $wg__input_fn << 5);
			const $childScope2 = _peek_scope_id();
			$content({
				fn: input.fn,
				depth: input.depth - 1
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _write_if($scope0_reason, 2) && _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth__OR__input_fn, $wg__input_depth);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_fn: input.fn }, "__tests__/tags/tree.marko", 0, { input_fn: ["input.fn"] });
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
			const $childScope = _peek_scope_id();
			tree_default({
				depth: 2,
				fn: function() {
					return "f:" + input.label;
				}
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
