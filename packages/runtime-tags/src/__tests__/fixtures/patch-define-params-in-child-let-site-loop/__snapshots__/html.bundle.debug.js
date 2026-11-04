// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>",
	"__tests__/tags/card.marko_1*shell": "__tests__/tags/card.marko_1*shell __tests__/tags/card.marko_1_c#0:5_i#2/setup;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of([2, 3], (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", c, { n: i });
		_patch_write($scope1_id, "PatchWrite:i", i, 1);
		_scope($scope1_id, {
			i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/card.marko", "4:4", { i: "4:8" });
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/tags/card.marko_1*shell", 0, 0);
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
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope1_id, "#text/1", n, 2, $scope1_reason, 0)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({ n: 1 });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	card_default({ content: Row });
	_patch_child_end();
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/6": _write_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
}, 1);
