// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $Tree_content__walks = "D l%c";
const $Tree_content__template = "<em> </em><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Tree_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Tree_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content >>>#childScope/0> __tests__/template.marko_3_depth#1:4/subscribe",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `D/${_w0}&l`)($Tree_content__walks)};${((_w0) => `<main>${_w0}</main>`)($Tree_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $cg__input_note = _client_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	const $input_note__closures = new Set();
	const Tree = { content: _content("__tests__/template.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $Tree_content__depth__closures = new Set();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__depth = _write_if($scope1_reason, 0);
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
					_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
					const $childScope = _patch_child($scope3_id, "#childScope/0", 0, void 0, $scope0_id);
					Tree.content({ depth: depth - 1 });
					_patch_child_end();
					$scope3_page && _subscribe(_unfilled_if($scope1_reason, 0) && $Tree_content__depth__closures, _scope($scope3_id, {
						_: ($wi__input_on || $wi__depth) && _scope_with_id($scope2_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/template.marko", "5:8"));
				}, $scope2_id, ($scope) => $scope1_page ? [{ depth }, { _: $scope($scope1_id) }] : []), 0, $wg__input_on, $scope0_reason, 2);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_on ? "__tests__/template.marko_2_input_on#0:4/init" : "__tests__/template.marko_2_input_on#0:4/subscribe");
				$scope1_page && ($wi__input_on || $wi__depth) && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_input_on#0:4/subscribe", $wg__input_on);
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope1_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_note ? "__tests__/template.marko_1_input_note#0:3/init" : "__tests__/template.marko_1_input_note#0:3/subscribe");
		$scope1_page ? _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, {
			depth: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope1_reason, 0)) && depth,
			_: (_write_if($scope0_reason, 0) || $wi__depth) && _scope_with_id($scope0_id),
			"ClosureScopes:depth/7": $wi__depth && $Tree_content__depth__closures
		}, "__tests__/template.marko", "2:2", { depth: "2:16" }), $cg__input_note && "__tests__/template.marko_1_input_note#0:3/subscribe") : _filled_guard($scope1_reason, 0) && _content_withheld("__tests__/template.marko_3*content", $scope1_id) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", depth, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0", 2);
	Tree.content({ depth: 1 });
	_patch_child_end();
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_note: input.note,
		input_on: input.on,
		"ClosureScopes:input_on/6": $wi__input_on && $input_on__closures,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 1) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_on: ["input.on"]
	}) : (_filled_guard($scope0_reason, 1) && ($cg__input_on ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1)) : _content_withheld("__tests__/template.marko_3*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/content", input.note)), _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_3*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.on, !_server_guard($scope0_reason, 2)), _content_withheld("__tests__/template.marko_3*content", $scope0_id) && _content_withhold(input.on));
}, 1);
