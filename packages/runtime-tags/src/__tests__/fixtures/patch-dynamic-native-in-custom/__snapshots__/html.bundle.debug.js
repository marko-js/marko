// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_mark($scope0_id, "#text/0", input.meta ? input.meta.n : "-", 1, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button>+</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_on__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	card_default({
		meta: attrTag({ n: count }),
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.on ? "p" : "div", { "data-n": count }, 0, _content("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(_text_mark($scope2_id, "#text/0", input.label, $wg__input_label * 2));
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
			}, $scope1_id));
			_patch_render($scope1_id, "__tests__/template.marko_1_input_on#0:4_count#0:6/setup", _filled_guard($scope0_reason, 0) && ">input_on");
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_on#0:4/subscribe"), "__tests__/template.marko_1_count#0:6/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_on: input.on,
		input_label: input.label,
		count,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_on/7": _write_if($scope0_reason, 0) && $input_on__closures,
		"ClosureScopes:count/9": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"],
		count: "2:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
