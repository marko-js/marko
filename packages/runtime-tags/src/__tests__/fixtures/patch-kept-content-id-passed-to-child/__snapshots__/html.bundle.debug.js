// tags/field.marko
const $template$2 = "<input><label> </label>";
const $walks$2 = " b D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; b D ;<input><label> </label>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_id = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<input${_attr("id", input.id, $scope0_id, "#input/0", $scope0_reason, 0)}${_attr("aria-describedby", input.describedby, $scope0_id, "#input/0", $scope0_reason, 1)}>${_el_mark($scope0_id, "#input/0", $uf__input_id || _updates_from($scope0_reason, 1))}<label${_attr("for", input.id, $scope0_id, "#label/1", $scope0_reason, 0)}>${_text_mark($scope0_id, "#text/2", input.label, 1, $scope0_reason, 2)}</label>${_el_mark($scope0_id, "#label/1", $uf__input_id)}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

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
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id("uid");
		const hint = _id("hint");
		_set_scope_reason(_updates_from($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		field_default({
			id: uid,
			describedby: `${uid} ${hint}`,
			label: input.label
		});
		_patch_child_end();
		_html(`<p${_attr("id", hint, $scope1_id, "#p/1", 0, 0)}>hint</p>${_el_mark($scope1_id, "#p/1", 0)}`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: $wi__input_label && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_label/4": $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
