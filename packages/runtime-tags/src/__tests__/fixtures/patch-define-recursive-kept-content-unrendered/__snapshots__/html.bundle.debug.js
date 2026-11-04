// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": `__tests__/template.marko_3*content${_shell_marker([[], []], [">>#childScope/0>", [[""], []]], [">>#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$1])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template)}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": `__tests__/template.marko_4*shell${_shell_marker([[], []], [">#childScope/0>", [[""], []]], [">#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$1])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_next = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_next__closures = new Set();
	const Tree = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id(), $ui__input_next = _unfilled_if($scope0_reason, 1);
		const $scope1_reason = _scope_reason();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}</span>`);
			$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:3/subscribe");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:3/subscribe", $wg__input_label);
		}, $scope1_id) });
		_patch_child_end();
		_await($scope1_id, "#text/1", input.next, () => {
			const $scope3_id = _scope_id();
			const $childScope2 = _peek_scope_id($scope3_id, "#childScope/0", 1, 0, $scope0_id);
			Tree.content({});
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:4");
		}, 1, "__tests__/template.marko_3*content", $ui__input_next);
		$cg__input_next && _patch_render($scope1_id, "__tests__/template.marko_1_input_next#0:4/subscribe");
		_subscribe($ui__input_next && $input_next__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2"), $cg__input_next && "__tests__/template.marko_1_input_next#0:4/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			const $childScope3 = _peek_scope_id($scope4_id, "#childScope/0", 2, 0, $scope0_id);
			Tree.content({});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__input_show && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_label: input.label,
		input_next: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.next,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_next/7": _write_if($scope0_reason, 1) && $input_next__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_next: ["input.next"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label"), _filled_guard($scope0_reason, 1) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_next", input.next, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_next#4/subscribers", "input_next"));
}, 1);
