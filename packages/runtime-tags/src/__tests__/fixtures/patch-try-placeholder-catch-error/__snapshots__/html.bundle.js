// template.marko
function check(title, fail) {
	if (fail) {
		const err = new Error("boom " + title, { cause: /* @__PURE__ */ new Error("cause") });
		err.extra = "extra";
		throw err;
	}
	return title;
}
_shells({
	a5: "a5;D ;<em> </em>",
	a6: "a6;D ;<em> </em>",
	a7: "a7;b%;<!><!><!>",
	a4: "a4;D ;<p> </p>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_fail = _write_guard($scope0_reason, 0), $wi__input_slow = _write_if($scope0_reason, 3), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_fail = _filled_guard($scope0_reason, 2), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id(), $ui__input_slow = _unfilled_if($scope0_reason, 3);
		_await($scope3_id, "a", input.slow, (v) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_text_mark($scope5_id, "a", v, 1, $scope0_reason, 3)}</em>`);
			_scope($scope5_id, {});
		}, 1, "a5", $ui__input_slow && 2, 1);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "a8", 1);
		$wi__input_slow && _subscribe($ui__input_slow && $input_slow__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a8", 0);
		$wi__input_slow && _resume_branch($scope3_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", check(input.title, input.fail), $wg__input_title__OR__input_fail)}</p>`);
			_patch_render($scope2_id, "a0", [_filled_guard($scope0_reason, 1) && ">>d", _filled_guard($scope0_reason, 2) && ">>e"], $scope0_reason, 0);
			_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "a1", $wg__input_title__OR__input_fail), _client_guard($scope0_reason, 2) && "a2", $wg__input_title__OR__input_fail);
			$wg__input_title__OR__input_fail || (_write_guard($scope0_reason, 1) || _write_guard($scope0_reason, 2)) && _resume_branch($scope2_id);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<p>${_text_mark($scope4_id, "a", err.message, $wg__err_message)}</p>`);
			_write_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, 0, "a3", "a4");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "a9", void 0, "a7", 1);
	$fg__input_title && _patch_subscribers($scope0_id, "a10", "d");
	$fg__input_fail && _patch_subscribers($scope0_id, "a11", "e");
	_scope($scope0_id, {
		d: input.title,
		e: input.fail,
		g: $wi__input_title && $input_title__closures,
		h: $wi__input_fail && $input_fail__closures,
		i: $wi__input_slow && _unfilled_if($scope0_reason, 3) && $input_slow__closures
	}) || ($fg__input_title && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 1)), $fg__input_fail && _patch_write($scope0_id, "xe", input.fail, !_server_guard($scope0_reason, 2)));
}, 1);
