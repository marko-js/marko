// template.marko
function check(title, fail) {
	if (fail) {
		const err = new Error("boom " + title, { cause: /* @__PURE__ */ new Error("cause") });
		err.extra = "extra";
		throw err;
	}
	return title;
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_fail = _write_guard($scope0_reason, 0), $wg__input_slow = _write_guard($scope0_reason, 3), $wi__input_slow = _write_if($scope0_reason, 3), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_await($scope3_id, "a", input.slow, (v) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_resume($scope5_id, "a", v, $wg__input_slow)}</em>`);
			$wi__input_slow && _scope($scope5_id, {});
		}, $wg__input_slow);
		$wi__input_slow && _subscribe($input_slow__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a3", 0);
		$wi__input_slow && _resume_branch($scope3_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", check(input.title, input.fail), $wg__input_title__OR__input_fail)}</p>`);
			_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_title__OR__input_fail), "a1", $wg__input_title__OR__input_fail);
			$wg__input_title__OR__input_fail || _resume_branch($scope2_id);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<p>${_text_resume($scope4_id, "a", err.message, $wg__err_message)}</p>`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "a2");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "a4");
	_scope($scope0_id, {
		d: input.title,
		e: input.fail,
		g: $wi__input_title && $input_title__closures,
		h: $wi__input_fail && $input_fail__closures,
		i: $wi__input_slow && $input_slow__closures
	});
}, 1);
