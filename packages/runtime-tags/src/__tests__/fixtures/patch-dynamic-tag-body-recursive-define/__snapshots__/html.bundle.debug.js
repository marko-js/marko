// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Tree_content__walks = "D l%c";
const $Tree_content__template = "<em> </em><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Tree_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Tree_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content >>>#childScope/0>",
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `D/${_w0}&l`)($Tree_content__walks)};${((_w0) => `<main>${_w0}</main>`)($Tree_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $cg__input_note = _client_guard($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	const $input_note__closures = new Set();
	const Tree = { content: _content("__tests__/template.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $Tree_content__depth__closures = new Set();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__depth = _write_if($scope1_reason, 0), $fg__depth = _filled_guard($scope1_reason, 0);
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 1)}</em>`);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_set_scope_reason(_updates_from($scope1_reason, 0) << 1);
					const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0, 0, $scope0_id);
					Tree.content({ depth: depth - 1 });
					_patch_child_end();
					_unfilled_if($scope1_reason, 0) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_depth#1:4/subscribe");
					_subscribe(_unfilled_if($scope1_reason, 0) && $Tree_content__depth__closures, _scope($scope3_id, {
						_: ($wi__input_on || $wi__depth) && _scope_with_id($scope2_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/template.marko", "5:8"));
					_resume_branch($scope3_id);
				}, $scope2_id, ($scope) => $scope1_page ? [
					{
						input_on: input.on,
						input_note: input.note
					},
					{
						depth,
						_: $scope($scope0_id)
					},
					{ _: $scope($scope1_id) }
				] : []), 0, $wg__input_on, $scope0_reason, 2, 0, void 0, 0, 0, "__tests__/template.marko_3*content");
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_on#0:4/subscribe", $cg__input_on);
				($wi__input_on || $wi__depth) && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), $cg__input_on && "__tests__/template.marko_2_input_on#0:4/subscribe", $wg__input_on);
				$wg__input_on || ($wi__input_on || $wi__depth) && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope1_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		$fg__depth && _patch_subscribers($scope1_id, "__tests__/template.marko_1_depth#4/subscribers", "depth");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_note#0:3/subscribe", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, {
			depth: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope1_reason, 0)) && depth,
			_: (_write_if($scope0_reason, 0) || $wi__depth) && _scope_with_id($scope0_id),
			"ClosureScopes:depth/7": $wi__depth && $Tree_content__depth__closures
		}, "__tests__/template.marko", "2:2", { depth: "2:16" }), $cg__input_note && "__tests__/template.marko_1_input_note#0:3/subscribe") || $fg__depth && (_client_branch_if("__tests__/template.marko_3*content", $scope1_id) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope1_id, "PatchMarkedWrite:depth", depth, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 2);
	Tree.content({ depth: 1 });
	_patch_child_end();
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#3/subscribers", "input_note");
	$fg__input_on && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_on#4/subscribers", "input_on");
	_scope($scope0_id, {
		input_note: input.note,
		input_on: input.on,
		"ClosureScopes:input_on/6": $wi__input_on && $input_on__closures,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 1) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_on: ["input.on"]
	}) || ($fg__input_note && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 1)), $fg__input_on && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 2)));
}, 1);
