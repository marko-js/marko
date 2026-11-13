// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, { n: 2 });
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_c#5/fill", c, 1);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $mark__closures = new Set();
	const $global$1 = $global();
	const mark = $global$1.label + "!";
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", mark, 1, 4, 0)} ${_text_mark($scope1_id, "#text/1", n, 2, $scope1_reason, 0)}</em>`);
		_subscribe(_unfilled_if() && $mark__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_mark#0:2/subscribe");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({ n: 1 });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	card_default({ content: Row });
	_patch_child_end();
	_fill_global_subscribe("__tests__/template.marko_0_$global_label#4", $scope0_id);
	_scope($scope0_id, {
		mark,
		"ClosureScopes:mark/4": $mark__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { mark: "1:8" }) || _patch_write($scope0_id, "PatchMarkedWrite:mark", mark) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_mark#2/subscribers", "mark");
}, 1);
