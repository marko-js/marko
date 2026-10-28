// tags/keep.marko
var keep_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=reset>reset</button>${_el_resume($scope0_id, "a")}<div>`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html("</div>");
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_bs = _write_guard($scope0_reason, 0), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_bs = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_for_of(input.bs, (b) => {
		const $scope1_id = _scope_id();
		const $for_content__b__closures = /* @__PURE__ */ new Set();
		keep_default({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`${_text_resume($scope2_id, "a", b, $wg__input_bs)}:${_text_resume($scope2_id, "b", input.note, $wg__input_note * 2)}`);
			_subscribe($wi__input_bs && $for_content__b__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_bs || $wg__input_note), "a1", $wg__input_bs || $wg__input_note);
			$wg__input_bs || $wg__input_note || _resume_branch($scope2_id);
		}, $scope1_id) });
		_scope($scope1_id, {
			c: b,
			_: _scope_with_id($scope0_id),
			g: $wi__input_bs && $for_content__b__closures
		});
	}, 0, $scope0_id, "a", $wg__input_bs, $wg__input_bs);
	_scope($scope0_id, {
		e: input.note,
		f: $wi__input_note && $input_note__closures
	});
}, 1);
