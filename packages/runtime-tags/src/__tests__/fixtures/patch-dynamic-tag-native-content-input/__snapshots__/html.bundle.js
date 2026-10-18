// template.marko
_shells({
	a0: "a0,",
	a1: "a1 a11,",
	a: "a !a5; D l%;<button> </button><!><!>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("a0", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2);
		_html(`<p>${_patch_text($scope3_id, "a", label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 0, 0, $wg__content, void 0, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 1), void 0, void 0, void 0, ["a3"]);
		_html("</p>");
		_scope($scope3_id, { f: _unfilled_if($scope3_reason, 1) && content });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", n, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a4");
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "a", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 0, 0, $wg__input_tags__OR__input_card, void 0, 1, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && tag,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 2);
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wi", Card, 1);
	_patch_write($scope0_id, "wk", Label, 1);
	_patch_value($scope0_id, "va8", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.card,
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && Card,
		j: n,
		k: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && Label,
		l: _write_if($scope0_reason, 1) && $input_label__closures,
		o: $n__closures
	}) : (_filled_guard($scope0_reason, 1) && _content_withheld("a1", _client_guard($scope0_reason, 0)) && _patch_value($scope0_id, "va6", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va7", input.card, !_server_guard($scope0_reason, 3)));
}, 1);
