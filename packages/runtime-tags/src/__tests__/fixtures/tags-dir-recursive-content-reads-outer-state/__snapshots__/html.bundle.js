// tags/rec.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	let shown = false;
	const label = "off";
	_html(`<button>${_text_mark($scope0_id, "b", input.depth, $wg__input_depth)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "c");
	_if(() => {
		if (input.depth < 1) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth + 1,
				content: _content_resume("b1", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>held ${_text_mark($scope3_id, "a", label, 2)}</em>`);
					_subscribe($label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "b0");
				}, $scope2_id)
			});
			_scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		h: input.content,
		i: shown,
		j: label,
		m: $label__closures
	});
};
var rec_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	rec_default({ depth: 0 });
}, 1);
