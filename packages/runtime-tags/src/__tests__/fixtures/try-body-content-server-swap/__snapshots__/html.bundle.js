// tags/wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wg__input_fail = _write_guard($scope0_reason, 2), $wi__input_content = _write_if($scope0_reason, 1), $wi__input_content__OR__input_fail = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.fail ? boom() : "ok", $wg__input_fail)}</p>`);
		_dynamic_tag($scope2_id, "b", input.content, {}, 0, 0, $wg__input_content);
		$wi__input_content__OR__input_fail && _subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cf: $wi__input_content && 1
		}), "b1", $wg__input_content || $wg__input_fail), "b2", $wg__input_content || $wg__input_fail);
		$wg__input_content || $wg__input_fail || $wi__input_content__OR__input_fail && _resume_branch($scope2_id);
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "b3");
	_scope($scope0_id, {
		d: input.content,
		f: $wi__input_content && $input_content__closures,
		g: $wi__input_fail && $input_fail__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_alt = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const A = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>A ${_text_resume($scope1_id, "a", input.label, $wg__input_label * 2)}</em>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) };
	const B = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>B ${_text_resume($scope2_id, "a", input.label, $wg__input_label * 2)}</i>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cl: $wi__input_label && 1
		}), "a3", $wg__input_label);
		$wg__input_label || _resume_branch($scope2_id);
	}, $scope0_id) };
	_set_scope_reason(34 | _write_guard($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id();
	wrapper_default({
		fail: false,
		content: input.alt ? A : B
	});
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: input.label,
		h: count,
		i: $wi__input_alt && A,
		j: $wi__input_alt && B,
		l: $wi__input_label && $input_label__closures,
		c: _existing_scope($childScope)
	});
}, 1);
