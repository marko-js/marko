// tags/card/index.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	b: "b; ;<section></section>",
	b2: "b2; D lD ;<h2> </h2><p> </p>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2), $fg__input_note = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<h2${_attr_class(input.title, $scope1_id, "a", $scope0_reason, 2)}>${_text_mark($scope1_id, "b", input.title, 1, $scope0_reason, 2)}</h2>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 2))}<p>${_text_mark($scope1_id, "c", input.note, 1, $scope0_reason, 3)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 1);
	_html(`</section>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_title && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	$fg__input_note && $cg__input_show && _patch_render($scope0_id, "b1", "f");
	_scope($scope0_id, {
		e: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.title,
		f: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.note
	}) || ($fg__input_title && $ui__input_show && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 2)), $fg__input_note && $ui__input_show && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_note = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($uf__input_note << 1 | _updates_from($scope0_reason, 0) << 3 | $uf__input_note << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		show: input.show,
		title: "fixed",
		note: input.note
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
