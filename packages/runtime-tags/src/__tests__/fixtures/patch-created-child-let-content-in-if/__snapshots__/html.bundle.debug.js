// tags/outer.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; b%;<button>clear</button><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_value_content#0:7/setup;D%;<section><!></section>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.label !== "x") {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", value.content, {});
			_html("</section>");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:value_content", value?.content, 1);
	_scope($scope0_id, { value_content: _write_if($scope0_reason, 1) && value?.content }, "__tests__/tags/outer.marko", 0, { value_content: ["value.content", "1:6"] }) || _client_branch(input.data);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:3/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_label && "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			outer_default({ data: _patch_live($childScope, { content: Body.content }, $scope2_id, "") });
			_patch_child_end();
			!_client_guard($scope0_reason, 1) && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Body_content", Body?.content);
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		Body_content: _unfilled_if($scope0_reason, 1) && Body?.content,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"]
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
