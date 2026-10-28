// card.marko
const $template$1 = "<section><em> </em><!><!></section>";
const $walks$1 = "E l%b%l";
const $setup$1 = [[], []];
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%b%;<section><em> </em><!><!></section>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_resume($scope0_id, "#text/0", input.meta.n, 1, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "#text/1", input.meta.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 10, 0, 0, _write_guard($scope0_reason, 2), $scope0_reason, 2);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		meta: attrTag({
			n: count,
			content: _content("__tests__/template.marko_1*content", () => {
				const $scope1_reason = _scope_reason();
				const $scope1_id = _scope_id();
				_html(_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0));
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe");
			}, $scope0_id)
		}),
		content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 0));
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/6": $wi__input_label && 1
			}, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:input_label/6": $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
