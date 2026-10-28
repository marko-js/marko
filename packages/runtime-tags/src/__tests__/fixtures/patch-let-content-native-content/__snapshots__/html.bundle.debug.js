// tags/card.marko
const $template$2 = "<section></section>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko; ;<section></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_attr_content("#section/0", $scope0_id, input.content, 0, 1, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({
	"__tests__/tags/outer.marko_3*content": "__tests__/tags/outer.marko_3*content",
	"__tests__/tags/outer.marko_1*content": "__tests__/tags/outer.marko_1*content __tests__/tags/outer.marko_1_o#0:5/init;b%;<!><!><!>",
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; b%;<button>clear</button><!><!>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $o__closures = new Set();
	let o = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (o) {
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				card_default({ content: o });
				_patch_child_end();
				_subscribe($o__closures, _scope($scope2_id, {
					"#childScope/0": _existing_scope($childScope),
					"ClosureSignalIndex:o/6": 1
				}, "__tests__/tags/outer.marko", "4:4"), "__tests__/tags/outer.marko_2_o#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_subscribe($o__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "3:2"), "__tests__/tags/outer.marko_1_o#0:5/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>caught ${_text_resume($scope3_id, "#text/0", err.message, 2, 4, 0)}</p>`);
		_scope($scope3_id, {}, "__tests__/tags/outer.marko", "5:4");
	}, 0, "__tests__/tags/outer.marko_3*content", "__tests__/tags/outer.marko_1*content", 1, 1, 1);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", o, 1);
	_scope($scope0_id, { "ClosureScopes:o/6": $o__closures }, "__tests__/tags/outer.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<h1> </h1>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;Db%;<em>static <!></em>",
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content;Db%;<em>static <!></em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D l/${_w0}&b`)($walks$1)};${((_w0) => `<h1> </h1>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html(`<h1>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	outer_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_resume($scope1_id, "#text/0", input.label, 2, $scope0_reason, 0)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
	}, $scope0_id, 3) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
