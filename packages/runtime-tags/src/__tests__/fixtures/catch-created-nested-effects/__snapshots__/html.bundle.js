// tags/wrap.marko
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 2), $wi__input_v = _write_if($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wg__input_fail__OR__input_msg = _write_guard($scope0_reason, 1), $wi__input_fail__OR__input_msg = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 6), $wi__input_fail = _write_if($scope0_reason, 5), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html(`<p>${_text_resume($scope5_id, "a", input.fail ? boom(input.msg) : input.msg, $wg__input_fail__OR__input_msg)}</p>`);
		$wi__input_fail__OR__input_msg && _subscribe($wi__input_msg && $input_msg__closures, _subscribe($wi__input_fail && $input_fail__closures, _scope($scope5_id, { _: _scope_with_id($scope0_id) }), "a12", $wg__input_fail__OR__input_msg), "a13", $wg__input_fail__OR__input_msg);
		$wg__input_fail__OR__input_msg || $wi__input_fail__OR__input_msg && _resume_branch($scope5_id);
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_message = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $catch_content__w__closures = /* @__PURE__ */ new Set();
		const w = input.v * 10;
		_html(`<b>${_text_resume($scope1_id, "a", err.message, $wg__err_message)}</b>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_resume($scope2_id, "a", w, $wg__input_v)}</i>`);
				_script($scope2_id, "a0", $wg__input_v);
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: $wi__input_v && 1
				}), "a1", $wg__input_v);
				return 0;
			}
		}, $scope1_id, "b", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
		_for_of(input.items, (x) => {
			const $scope3_id = _scope_id();
			_html(`<u>${_text_resume($scope3_id, "a", x, $wg__input_items)}</u>`);
			_script($scope3_id, "a2", $wg__input_items);
			_subscribe($wi__input_v && $input_v__closures, _scope($scope3_id, {
				c: x,
				_: _scope_with_id($scope1_id),
				Ci: $wi__input_v && 2
			}), "a3", $wg__input_items);
		}, 0, $scope1_id, "c", $wg__input_items, $wg__input_items, 0, 0, 1);
		wrap_default({ content: _content("a7", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_text_resume($scope4_id, "a", w, $wg__input_v)}</s>`);
			_script($scope4_id, "a4", $wg__input_v);
			_subscribe($wi__input_v && $catch_content__w__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				Ci: $wi__input_v && 3
			}), "a5", $wg__input_v), "a6", $wg__input_v);
			$wg__input_v || _resume_branch($scope4_id);
		}, $scope1_id) });
		_script($scope1_id, "a8", $wg__input_show || $wg__input_items || $wg__err_message);
		_subscribe($wi__input_items && $input_items__closures, _subscribe($wi__input_show && $input_show__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope1_id, {
			h: $wi__input_show && w,
			_: _scope_with_id($scope0_id),
			n: $wi__input_v && $catch_content__w__closures
		}), "a9", $wg__input_show || $wg__input_items || $wg__err_message), "a10", $wg__input_show || $wg__input_items || $wg__err_message), "a11", $wg__input_show || $wg__input_items || $wg__err_message);
		$wg__input_show || $wg__input_items || $wg__err_message || _resume_branch($scope1_id);
	}, void 0, "a14");
	_scope($scope0_id, {
		d: input.v,
		e: input.show,
		f: input.items,
		g: $wi__input_msg && input.fail,
		h: $wi__input_fail && input.msg,
		i: $wi__input_v && $input_v__closures,
		j: $wi__input_show && $input_show__closures,
		k: $wi__input_items && $input_items__closures,
		l: $wi__input_fail && $input_fail__closures,
		m: $wi__input_msg && $input_msg__closures
	});
}, 1);
