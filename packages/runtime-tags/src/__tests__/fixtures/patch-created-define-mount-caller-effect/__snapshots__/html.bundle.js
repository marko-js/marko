// template.marko
const $Info_content__walks = "b";
const $Info_content__template = "<p>info</p>";
_shells({
	a: `a !a6;${((_w0) => ` D l/${_w0}&%c`)($Info_content__walks)};${((_w0) => `<button> </button>${_w0}<!><!>`)($Info_content__template)}`,
	a5: `a5 >a>;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Info_content__walks)};${$Info_content__template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_page = _updates_from($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_page2 = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_page = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	const Info = { content: _content("a0", ({ label }) => {
		const $scope1_id = _scope_id(), $fg__input_page = _filled_guard($scope0_reason, 1);
		const $scope1_reason = _scope_reason(), $fg__label = _filled_guard($scope1_reason, 0), $uf__label = _updates_from($scope1_reason, 0);
		_html("<p>info</p>");
		_unfilled_if(($uf__input_page | $uf__label) << 1, 0) && _patch_subscribe($scope1_id, "a2");
		_script($scope1_id, "a1", 0, ($fg__input_page || $fg__label) && (_client_guard($scope0_reason, 1) || _client_guard($scope1_reason, 0) ? 2 : 1), [$fg__input_page && ">g", $fg__label && "c"], "a3", ($uf__input_page | $uf__label) << 1, 0);
		_subscribe(_unfilled_if(($uf__input_page | $uf__label) << 1, 0) && $wi__input_page && $input_page__closures, _scope($scope1_id, {
			c: label,
			_: _scope_with_id($scope0_id)
		}), _client_guard(($uf__input_page | $uf__label) << 1, 0) && "a2", 0) || $fg__label && _patch_write($scope1_id, "xc", label, !_server_guard($scope1_reason, 0));
		_write_guard($scope0_reason, 1) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	Info.content({ label: count });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1, 0, $scope0_id);
			Info.content({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope2_id, "a4");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a5"], $scope0_reason, 2);
	_script($scope0_id, "a6");
	$fg__input_page2 && $cg__input_show && _patch_subscribers($scope0_id, "a7", "g");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a4", "i");
	_scope($scope0_id, {
		g: input.page,
		i: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.label,
		j: count,
		k: $wi__input_page && $input_page__closures,
		c: _existing_scope($childScope)
	}) || ($fg__input_page2 && _patch_write($scope0_id, "xg", input.page, !_server_guard($scope0_reason, 1)), $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xi", input.label, !_server_guard($scope0_reason, 3)));
}, 1);
