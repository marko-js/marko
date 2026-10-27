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
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $Note_content__walks = "D l";
const $Note_content__template = "<em> </em>";
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($Note_content__template, $Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)($Note_content__walks, $Wrap_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content >>#childScope/0>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0, _w1) => `D/${_w0}&/${_w1}&l`)($Note_content__walks, $Wrap_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($Note_content__template, $Wrap_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	const Note = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_note ? "__tests__/template.marko_1_input_note#0:4/init" : "__tests__/template.marko_1_input_note#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), $cg__input_note && "__tests__/template.marko_1_input_note#0:4/subscribe");
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_dynamic_tag($scope2_id, "#text/0", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_3*content", () => {
			const $scope3_id = _scope_id();
			const $scope3_reason = _scope_reason();
			const $childScope = _patch_child($scope3_id, "#childScope/0", 0, void 0, $scope0_id);
			Note.content({});
			_patch_child_end();
			_scope($scope3_id, {
				_: $wi__input_on && _scope_with_id($scope2_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:6");
		}, $scope2_id), 0, $wg__input_on, $scope0_reason, 2);
		$wi__input_on && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), $cg__input_on && "__tests__/template.marko_2_input_on#0:5/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_on && _resume_branch($scope2_id);
	}, $scope0_id) };
	_html("<main>");
	const $childScope2 = _patch_child($scope0_id, "#childScope/0", 2);
	Note.content({});
	_patch_child_end();
	const $childScope3 = _patch_child($scope0_id, "#childScope/1", 3);
	Wrap.content({});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		"ClosureScopes:input_note/6": _write_if($scope0_reason, 1) && $input_note__closures,
		"ClosureScopes:input_on/7": $wi__input_on && $input_on__closures,
		"#childScope/0": _existing_scope($childScope2),
		"#childScope/1": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 1) && ($cg__input_on ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1)) : _content_withheld("__tests__/template.marko_3*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/content", input.note));
}, 1);
