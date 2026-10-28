// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/card.marko_1*content;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	"__tests__/tags/card.marko": /*@__PURE__*/ (() => `__tests__/tags/card.marko;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/tags/card.marko_2*shell": "__tests__/tags/card.marko_2*shell,<p><b>yes</b></p>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	const Panel = { content: _content("__tests__/tags/card.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html("<p><b>yes</b></p>");
				$wi__open && _scope($scope2_id, {}, "__tests__/tags/card.marko", "2:26");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__open, void 0, void 0, void 0, ["__tests__/tags/card.marko_2*shell"], $scope1_reason, 0);
		$wi__open && _scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2");
	}, $scope0_id, 1) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({ open: n });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<button> </button><main><!></main>";
const $walks = " D lD%l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD%;<button> </button><main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_dynamic_tag($scope0_id, "#text/2", input.on ? card_default : "div", { n: input.n }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.on,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		c
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_n: ["input.n"],
		c: "2:6"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.on), _filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 2)), $cg__input_on && _content_withhold(input.n));
}, 1);
