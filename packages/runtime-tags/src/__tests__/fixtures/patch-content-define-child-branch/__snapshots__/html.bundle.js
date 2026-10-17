// template.marko
const $Card_content2__walks = " b";
const $Card_content2__template = "<section></section>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 !;${_w0};${_w1}`)($Card_content2__walks, $Card_content2__template),
	a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)($Card_content2__walks)};${((_w0) => `<main>${_w0}</main>`)($Card_content2__template)}`)(),
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_elide("a0", ({ show, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 2), $wg__show = _write_guard($scope2_reason, 1), $scope2_page = _page_render();
		_html("<section>");
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", content, {}, 0, 0, $wg__content, void 0, 2, $scope2_reason, 2);
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__show, void 0, void 0, void 0, ["a1"], $scope2_reason, 1);
		_html(`</section>${_el_resume($scope2_id, "a", $wg__show)}`);
		$scope2_page ? _write_if($scope2_reason, 1) && _scope($scope2_id, { e: _unfilled_if($scope2_reason, 1) && content }) : _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_value($scope2_id, "va2", content, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	Card.content({
		show: input.show,
		content: _content_resume("a4", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a3");
		}, $scope0_id)
	});
	_html("</main>");
	_patch_write($scope0_id, "we", input.note, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1);
