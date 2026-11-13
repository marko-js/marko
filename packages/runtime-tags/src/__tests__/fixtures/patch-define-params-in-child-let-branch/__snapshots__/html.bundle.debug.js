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
const $Row_content__walks = "D l%c";
const $Row_content__template = "<em> </em><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template$1)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<b> </b>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", n, 1, $scope1_reason, 0)}</em>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "#text/0", input.label, 1, $scope0_reason, 1)}</b>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
		$cg__input_show && _patch_render($scope1_id, "__tests__/template.marko_1_input_show#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_show && "__tests__/template.marko_1_input_show#0:4/subscribe");
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
		input_show: input.show,
		input_label: input.label,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:input_show/7": _write_if($scope0_reason, 0) && $input_show__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_show#4/subscribers", "input_show"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label"));
}, 1);
