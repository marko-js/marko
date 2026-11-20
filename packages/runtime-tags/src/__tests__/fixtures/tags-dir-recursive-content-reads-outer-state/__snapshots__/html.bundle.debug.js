// tags/rec.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	let shown = false;
	const label = shown ? "on" : "off";
	_html(`<button>${_text_mark($scope0_id, "#text/1", input.depth, $wg__input_depth)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (shown) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, _write_guard($scope0_reason, 1));
			_scope($scope1_id, {}, "__tests__/tags/rec.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_if(() => {
		if (input.depth < 1) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth + 1,
				content: _content_resume("__tests__/tags/rec.marko_3*content", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>held ${_text_mark($scope3_id, "#text/0", label, 2)}</em>`);
					_subscribe($label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/tags/rec.marko", "6:4"), "__tests__/tags/rec.marko_3_label#0:9/subscribe");
				}, $scope2_id)
			});
			_scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
			}, "__tests__/tags/rec.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "__tests__/tags/rec.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		shown,
		label,
		"ClosureScopes:label/12": $label__closures
	}, "__tests__/tags/rec.marko", 0, {
		input_content: ["input.content"],
		shown: "1:6",
		label: "2:8"
	});
};
var rec_default = _template("__tests__/tags/rec.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	rec_default({ depth: 0 });
}, 1);
