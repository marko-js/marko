// tags/outer.marko
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; bD%;<button>clear</button><section><!></section>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", value.content, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0) || _content_withhold(input.data);
});

// template.marko
const $template = "<button>make</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>make</button><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_1_input_label#0:4/init" : "__tests__/template.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	const api = { make: _resume(function(i) {
		return {
			content: Body.content,
			i
		};
	}, "__tests__/template.marko_0/api", $scope0_id) };
	_html(`<button>make</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.show ? [1, 2] : [1], (i) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
		outer_default({ data: api.make(i) });
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_api#0:8_i#2/init");
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		Body_content: Body?.content,
		api,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 0) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"],
		api: "2:8"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
