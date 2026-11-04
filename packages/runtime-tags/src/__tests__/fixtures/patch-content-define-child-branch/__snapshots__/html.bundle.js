// template.marko
const $Card_content2__walks = " b";
const $Card_content2__template = "<section></section>";
_shells({
	a1: "a1;D ;<em> </em>",
	a: `a;${((_w0) => `D/${_w0}&l`)($Card_content2__walks)};${((_w0) => `<main>${_w0}</main>`)($Card_content2__template)}`,
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 2), $uf__input_show = _updates_from($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content("a2", ({ show, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 2), $wg__show = _write_guard($scope2_reason, 1), $ui__show = _unfilled_if($scope2_reason, 1), $fg__content = _filled_guard($scope2_reason, 2);
		_html("<section>");
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 2, 0, 0, $wg__content, $scope2_reason, 2);
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__show, 1, 0, 0, ["a0"], $scope2_reason, 1);
		_html(`</section>${_el_mark($scope2_id, "a", $wg__show)}`);
		$fg__content && _client_guard($scope2_reason, 1) && _patch_render($scope2_id, "a3", "e");
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: $ui__show && content }) || $fg__content && $ui__show && _patch_write($scope2_id, "xe", content, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Card.content({
		show: input.show,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a4", $cg__input_note);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_note && "a4");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_note && $ui__input_show && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 2));
}, 1);
