// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
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

// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "^__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=inc> </button>" });
_stateful_return("__tests__/tags/counter.marko");
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = c;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", c, 1);
	$scope0_page && _scope($scope0_id, { c }, "__tests__/tags/counter.marko", 0, { c: "1:6" });
	return $return;
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_v#1:3/init",
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&%c`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__v__closures = new Set();
			const $childScope = _patch_child($scope1_id, "#childScope/0", 1);
			let v = counter_default({});
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_v#3/var");
			_dynamic_tag($scope1_id, "#text/2", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.note, void 0, $scope0_reason, 4)} ${_text_resume($scope2_id, "#text/1", v, 2)}</em>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, _client_guard($scope0_reason, 4) ? "__tests__/template.marko_2_input_note#0:5/init" : "__tests__/template.marko_2_input_note#0:5/subscribe");
				$scope2_page && _subscribe($if_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8")));
			}, $scope1_id, ($scope) => $scope0_page ? [{ input_note: input.note }, {
				v,
				_: $scope($scope0_id)
			}] : []), 0, _write_guard($scope0_reason, 3), void 0, 2, $scope0_reason, 3);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_on#0:4/init");
			$scope0_page && _scope($scope1_id, {
				v: _write_if($scope0_reason, 3) && v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"ClosureScopes:v/8": $if_content__v__closures
			}, "__tests__/template.marko", "3:4", { v: "4:14" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_note: ["input.note"]
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.on), _filled_guard($scope0_reason, 4) && _content_withheld("__tests__/template.marko_2*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
