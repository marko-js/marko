// tags/frame.marko
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	frame_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label + ": 0")}</p>`);
		_script($scope1_id, "a0");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1"), "a2");
	}, $scope0_id) });
	frame_default({ content: _content("a7", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.label + ": 0")}</p>`);
		_script($scope2_id, "a4");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ck: $wi__input_label && 1,
			Cm: 1
		}), "a5"), "a6");
	}, $scope0_id) });
	frame_default({ content: _content("a11", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "a", input.title + ": 0")}</p>`);
		_script($scope3_id, "a8");
		_subscribe($count__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cm: 2
		}), "a9"), "a10");
	}, $scope0_id) });
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a12");
	_scope($scope0_id, {
		h: input.label,
		i: input.title,
		j: count,
		k: $wi__input_label && $input_label__closures,
		m: $count__closures,
		l: $wi__input_title && $input_title__closures
	});
}, 1);
