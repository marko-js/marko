// template.marko
_shells({
	a0: "a0 !a1",
	a4: "a4",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_card__OR__input_tag = _write_guard($scope0_reason, 0), $ui__input_card__OR__input_tag = _unfilled_if($scope0_reason, 0), $ui__input_tag = _unfilled_if($scope0_reason, 4), $ui__input_card = _unfilled_if($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_card = _filled_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("a0", ({ label, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_patch_write($scope2_id, "xg", content);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_mark($scope2_id, "a")}<p>${_text_mark($scope2_id, "b", label, 1, 4, 0)}`);
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 0, 0, 0, $wg__content);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope2_id, "c");
		_html("</p>");
		_script($scope2_id, "a1");
		_patch_render($scope2_id, "a2", "g");
		_patch_fill($scope2_id, "va3", open, 1);
		_scope($scope2_id, {
			g: content,
			h: open
		});
	}, $scope0_id) };
	const Label = { content: _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a5", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_label && "a5");
	}, $scope0_id, ($scope) => $scope0_page ? [{ d: input.label }] : []) };
	_dynamic_tag($scope0_id, "a", input.card ? Card : "span", {
		label: input.tag,
		content: Label
	}, 9, 0, 0, $wg__input_card__OR__input_tag, $scope0_reason, 0, 0, void 0, 0, 0, "a4");
	$fg__input_label && _patch_subscribers($scope0_id, "a6", "d");
	_patch_render($scope0_id, "a7", (($fg__input_card ? " e" : "") + ($fg__input_tag ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_card__OR__input_tag || _unfilled_if($scope0_reason, 2)) && input.label,
		e: ($ui__input_tag || $ui__input_card__OR__input_tag) && input.card,
		f: ($ui__input_card || $ui__input_card__OR__input_tag) && input.tag,
		g: $ui__input_card__OR__input_tag && Card,
		h: $ui__input_card__OR__input_tag && Label,
		j: _write_if($scope0_reason, 2) && $input_label__closures
	}) || ($fg__input_label && (_client_branch_if("a4", $scope0_id) || _client_guard($scope0_reason, 0) || $ui__input_card__OR__input_tag) && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 2)), $fg__input_card && $ui__input_tag && _patch_write($scope0_id, "xe", input.card, !_server_guard($scope0_reason, 3)), $fg__input_tag && $ui__input_card && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 4)));
}, 1);
