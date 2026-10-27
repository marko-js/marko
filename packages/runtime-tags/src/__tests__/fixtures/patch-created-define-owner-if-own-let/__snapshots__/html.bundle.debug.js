// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks);
const $setup$1 = [["#childScope/0>"], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/card.marko_1*content;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	"__tests__/tags/card.marko": /*@__PURE__*/ (() => `__tests__/tags/card.marko #childScope/0>!__tests__/tags/card.marko_0;${((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template)}`)()
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $k__closures = new Set();
	let k = input.n;
	const Panel = { content: _content_elide("__tests__/tags/card.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__open = _write_guard($scope1_reason, 0);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", k)}</p>`);
				$scope1_page && _subscribe($k__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "2:26"), "__tests__/tags/card.marko_2_k#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__open, $wg__open, 0, 0, 1);
		$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2");
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Panel.content({ open: k });
	_patch_child_end();
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", k, 1);
	$scope0_page && _scope($scope0_id, {
		k,
		"ClosureScopes:k/6": $k__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/card.marko", 0, { k: "1:6" });
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			card_default({ n: input.n });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_n#0:4/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_on, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_n: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.n }, "__tests__/template.marko", 0, { input_n: ["input.n"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.n, !_server_guard($scope0_reason, 1));
}, 1);
