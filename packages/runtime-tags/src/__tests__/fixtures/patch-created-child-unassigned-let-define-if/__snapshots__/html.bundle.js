// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	b0: `b0;${$Panel_content__walks};${$Panel_content__template}`,
	b: `b !;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	const Panel = { content: _content("b0", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html("<p><b>yes</b></p>");
				$wi__open && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", $wg__open, $wg__open, 0, 0, 1);
		$wi__open && _scope($scope1_id, {});
	}, $scope0_id, 0) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({ open: n });
	_patch_child_end();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_mark($scope0_id, "b", c)}</button>${_el_mark($scope0_id, "a")}<main>`);
	_dynamic_tag($scope0_id, "c", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", [$fg__input_on && "f", $fg__input_n && "g"], $scope0_reason, 0);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		i: c
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 1)), $fg__input_n && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
