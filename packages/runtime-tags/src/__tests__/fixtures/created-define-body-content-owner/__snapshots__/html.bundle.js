// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Wrap = { content: _content("a0", ({ content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<p>${_text_resume($scope3_id, "a", count)}</p><div>`);
		_dynamic_tag($scope3_id, "b", content, {}, 0, 0, _write_guard($scope3_reason, 0));
		_html("</div>");
		_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__n__closures = /* @__PURE__ */ new Set();
			let n = 0;
			Wrap.content({ content: _content("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<button>${_text_resume($scope2_id, "b", input.label, _write_guard($scope0_reason, 2))}:${_text_resume($scope2_id, "c", n, 2)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a2");
				_subscribe($if_content__n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a3"), "a4");
			}, $scope1_id) });
			_scope($scope1_id, {
				b: n,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				j: $if_content__n__closures
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && input.label,
		g: count,
		i: $count__closures,
		h: $wi__input_label && $input_label__closures
	});
}, 1);
