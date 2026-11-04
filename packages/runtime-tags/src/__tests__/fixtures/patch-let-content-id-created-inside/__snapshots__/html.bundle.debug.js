// tags/card.marko
const $template$1 = "<button>clear</button><!><!><!>";
const $walks$1 = " b%b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%b%;<button>clear</button><!><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	const $input_items__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				const uid = _id("uid");
				_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_mark($scope2_id, "#text/2", input.label, $wg__input_label)}</label>`);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_show, $wg__input_show);
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id();
			const rid = _id("rid");
			_html(`<input${_attr("id", rid)}><label${_attr("for", rid)}>${_escape(item.id)}</label>`);
			$wi__input_items && _scope($scope3_id, {}, "__tests__/template.marko", "7:4");
		}, "id", $scope1_id, "#text/1", $wg__input_items, $wg__input_items);
		$cg__input_show && _patch_render($scope1_id, "__tests__/template.marko_1_input_show#0:3/subscribe");
		$cg__input_items && _patch_render($scope1_id, "__tests__/template.marko_1_input_items#0:5/subscribe");
		_subscribe($wi__input_items && $input_items__closures, _subscribe($wi__input_show && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_show && "__tests__/template.marko_1_input_show#0:3/subscribe", $wg__input_show || $wg__input_items), $cg__input_items && "__tests__/template.marko_1_input_items#0:5/subscribe", $wg__input_show || $wg__input_items);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		input_show: input.show,
		input_label: input.label,
		input_items: input.items,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_show/6": $wi__input_show && $input_show__closures,
		"ClosureScopes:input_items/8": $wi__input_items && $input_items__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		input_items: ["input.items"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_show#3/subscribers", "input_show"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_items#5/subscribers", "input_items"));
}, 1);
