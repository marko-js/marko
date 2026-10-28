// template.marko
_shells({
	a0: "a0 !a1",
	a4: "a4",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_card__OR__input_tag = _write_guard($scope0_reason, 0), $cg__input_tag = _client_guard($scope0_reason, 4), $cg__input_card = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("a0", ({ label, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_content_withhold(content), _patch_fill($scope2_id, "va2", content);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "a")}<p>${_text_resume($scope2_id, "b", label, 1, 4, 0)}`);
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
		_patch_fill($scope2_id, "va3", open, 1);
		_scope($scope2_id, {
			g: content,
			h: open
		});
	}, $scope0_id) };
	const Label = { content: _content_resume("a4", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a5" : "a6");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.card ? Card : "span", {
		label: input.tag,
		content: Label
	}, 9, 0, 0, $wg__input_card__OR__input_tag, $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.card,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.tag,
		g: _unfilled_if($scope0_reason, 0) && Card,
		h: _unfilled_if($scope0_reason, 0) && Label,
		j: _write_if($scope0_reason, 2) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 2) && (_content_withheld("a4", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_tag && _patch_fill($scope0_id, "va8", input.card, !_server_guard($scope0_reason, 3)), $cg__input_tag && _content_withhold(input.card), _filled_guard($scope0_reason, 4) && $cg__input_card && _patch_fill($scope0_id, "va9", input.tag, !_server_guard($scope0_reason, 4)), $cg__input_card && _content_withhold(input.tag));
}, 1);
