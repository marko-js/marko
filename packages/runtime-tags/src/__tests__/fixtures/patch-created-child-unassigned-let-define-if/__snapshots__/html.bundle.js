// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	b1: /*@__PURE__*/ ((_w0, _w1) => `b1;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	b: /*@__PURE__*/ (() => `b;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	b0: "b0,<p><b>yes</b></p>"
});
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = input.n;
	const Panel = { content: _content_elide("b1", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html("<p><b>yes</b></p>");
				$scope1_page && $wi__open && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__open, void 0, void 0, void 0, ["b0"], $scope1_reason, 0);
		$scope1_page && $wi__open && _scope($scope1_id, {});
	}, $scope0_id) };
	const $childScope = _patch_child($scope0_id, "a", 0);
	Panel.content({ open: n });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "b", c)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		i: c
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "va1", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va2", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
