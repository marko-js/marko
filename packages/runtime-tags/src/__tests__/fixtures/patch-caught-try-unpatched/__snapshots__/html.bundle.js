// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
_shells({ a: "a !a4;D%b ;<main><!><button>Toggle</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_fail = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_fail = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", input.label, $wg__input_label)}${_text_mark($scope2_id, "b", check(input.fail), $wg__input_fail * 2)}</p>`);
				$cg__input_label && _patch_render($scope2_id, "a0");
				$cg__input_fail && _patch_render($scope2_id, "a1");
				_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0", $wg__input_label || $wg__input_fail), $cg__input_fail && "a1", $wg__input_label || $wg__input_fail);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("Unavailable");
			}, 0, "a2", "a3");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>Toggle</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_label && _patch_subscribers($scope0_id, "a5", "e");
	$fg__input_fail && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		e: input.label,
		f: input.fail,
		g: open,
		h: $wi__input_label && $input_label__closures,
		i: $wi__input_fail && $input_fail__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)), $fg__input_fail && _patch_write($scope0_id, "xf", input.fail, !_server_guard($scope0_reason, 1)));
}, 1);
