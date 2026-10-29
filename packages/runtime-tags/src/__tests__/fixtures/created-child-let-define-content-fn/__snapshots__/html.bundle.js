// tags/outer.marko
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", value.content, {});
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) };
	const make = _resume(() => ({ content: Body.content }), "a0", $scope0_id);
	_html(`<button>make</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			outer_default({ data: make() });
			_write_if($scope0_reason, 1) && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.label,
		h: Body?.content,
		i: make,
		j: $wi__input_label && $input_label__closures
	});
}, 1);
