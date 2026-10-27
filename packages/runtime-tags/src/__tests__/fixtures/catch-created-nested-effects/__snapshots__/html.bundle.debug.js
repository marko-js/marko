// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 2), $wi__input_v = _write_if($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wg__input_fail__OR__input_msg = _write_guard($scope0_reason, 1), $wi__input_fail__OR__input_msg = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 6), $wi__input_fail = _write_if($scope0_reason, 5), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_v__closures = new Set();
	const $input_show__closures = new Set();
	const $input_items__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<p>${_text_resume($scope5_id, "#text/0", input.fail ? boom(input.msg) : input.msg, $wg__input_fail__OR__input_msg)}</p>`);
		$wi__input_fail__OR__input_msg && _subscribe($wi__input_msg && $input_msg__closures, _subscribe($wi__input_fail && $input_fail__closures, _scope($scope5_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_5_input_fail#0:6/subscribe", $wg__input_fail__OR__input_msg), "__tests__/template.marko_5_input_msg#0:7/subscribe", $wg__input_fail__OR__input_msg);
		$wg__input_fail__OR__input_msg || $wi__input_fail__OR__input_msg && _resume_branch($scope5_id);
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_message = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $catch_content__w__closures = new Set();
		const w = input.v * 10;
		_html(`<b>${_text_resume($scope1_id, "#text/0", err.message, $wg__err_message)}</b>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_resume($scope2_id, "#text/0", w, $wg__input_v)}</i>`);
				_script($scope2_id, "__tests__/template.marko_2_input_v#0:3", $wg__input_v);
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_v/8": $wi__input_v && 1
				}, "__tests__/template.marko", "10:6"), "__tests__/template.marko_2_input_v#0:3/subscribe", $wg__input_v);
				return 0;
			}
		}, $scope1_id, "#text/1", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
		_for_of(input.items, (x) => {
			const $scope3_id = _scope_id();
			_html(`<u>${_text_resume($scope3_id, "#text/0", x, $wg__input_items)}</u>`);
			_script($scope3_id, "__tests__/template.marko_3_input_v#0:3_x#2", $wg__input_items);
			_subscribe($wi__input_v && $input_v__closures, _scope($scope3_id, {
				x,
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_v/8": $wi__input_v && 2
			}, "__tests__/template.marko", "14:6", { x: "14:10" }), "__tests__/template.marko_3_input_v#0:3/subscribe", $wg__input_items);
		}, 0, $scope1_id, "#text/2", $wg__input_items, $wg__input_items, 0, 0, 1);
		wrap_default({ content: _content("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_text_resume($scope4_id, "#text/0", w, $wg__input_v)}</s>`);
			_script($scope4_id, "__tests__/template.marko_4_input_v#0:3", $wg__input_v);
			_subscribe($wi__input_v && $catch_content__w__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_v/8": $wi__input_v && 3
			}, "__tests__/template.marko", "18:6"), "__tests__/template.marko_4_input_v#0:3/subscribe", $wg__input_v), "__tests__/template.marko_4_w#1:7/subscribe", $wg__input_v);
			$wg__input_v || _resume_branch($scope4_id);
		}, $scope1_id) });
		_script($scope1_id, "__tests__/template.marko_1_input_v#0:3", $wg__input_show || $wg__input_items || $wg__err_message);
		_subscribe($wi__input_items && $input_items__closures, _subscribe($wi__input_show && $input_show__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope1_id, {
			w: $wi__input_show && w,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:w/13": $wi__input_v && $catch_content__w__closures
		}, "__tests__/template.marko", "6:4", { w: "7:12" }), "__tests__/template.marko_1_input_v#0:3/subscribe", $wg__input_show || $wg__input_items || $wg__err_message), "__tests__/template.marko_1_input_show#0:4/subscribe", $wg__input_show || $wg__input_items || $wg__err_message), "__tests__/template.marko_1_input_items#0:5/subscribe", $wg__input_show || $wg__input_items || $wg__err_message);
		$wg__input_show || $wg__input_items || $wg__err_message || _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content");
	_scope($scope0_id, {
		input_v: input.v,
		input_show: input.show,
		input_items: input.items,
		input_fail: $wi__input_msg && input.fail,
		input_msg: $wi__input_fail && input.msg,
		"ClosureScopes:input_v/8": $wi__input_v && $input_v__closures,
		"ClosureScopes:input_show/9": $wi__input_show && $input_show__closures,
		"ClosureScopes:input_items/10": $wi__input_items && $input_items__closures,
		"ClosureScopes:input_fail/11": $wi__input_fail && $input_fail__closures,
		"ClosureScopes:input_msg/12": $wi__input_msg && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_show: ["input.show"],
		input_items: ["input.items"],
		input_fail: ["input.fail"],
		input_msg: ["input.msg"]
	});
}, 1);
