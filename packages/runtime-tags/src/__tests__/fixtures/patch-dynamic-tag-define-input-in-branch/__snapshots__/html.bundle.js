// template.marko
_shells({
	a1: "a1;D ;<h5> </h5>",
	a0: "a0;D ;<h4> </h4>",
	a: "a; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 2), $cg__input_show__OR__input_useA__OR__input_record = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_useA__OR__input_record = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_useA__OR__input_record = _unfilled_if($scope0_reason, 3), $ui__input_show__OR__input_record = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_useA = _unfilled_if($scope0_reason, 0), $fg__input_useA = _filled_guard($scope0_reason, 5), $fg__input_record = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a0", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_text_mark($scope2_id, "a", record.name, 1, 4, 0)}</h4>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a1", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_text_mark($scope3_id, "a", record.name, 1, 4, 0)}</h5>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.useA ? Card : Other, { record: input.record }, 1, 0, 0, $wg__input_useA__OR__input_record, $scope0_reason, 2);
			!$cg__input_show__OR__input_useA__OR__input_record && _unfilled_if() && _patch_write($scope0_id, "wg", Card);
			!$cg__input_show__OR__input_useA__OR__input_record && _unfilled_if() && _patch_write($scope0_id, "wh", Other);
			_patch_render($scope1_id, "a2", [_filled_guard($scope0_reason, 5) && ">e", _filled_guard($scope0_reason, 6) && ">f"], $scope0_reason, 2);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 4);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_useA && $cg__input_show && _patch_render($scope0_id, "a4", "e");
	$fg__input_record && $cg__input_show && _patch_render($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: ($ui__input_show__OR__input_record || $ui__input_useA__OR__input_record) && input.useA,
		f: ($ui__input_show__OR__input_useA || $ui__input_useA__OR__input_record) && input.record,
		g: ($ui__input_show__OR__input_useA__OR__input_record || $ui__input_useA__OR__input_record) && Card,
		h: ($ui__input_show__OR__input_useA__OR__input_record || $ui__input_useA__OR__input_record) && Other
	}) || ($fg__input_useA && $ui__input_show__OR__input_record && _patch_write($scope0_id, "xe", input.useA, !_server_guard($scope0_reason, 5)), $fg__input_record && $ui__input_show__OR__input_useA && _patch_write($scope0_id, "xf", input.record, !_server_guard($scope0_reason, 6)));
}, 1);
