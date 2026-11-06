// tags/cmp.marko
const $template$2 = "<p><!> <!></p><!><!><!>";
const $walks$2 = "D%c%l%b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/cmp.marko": "__tests__/tags/cmp.marko !;D%c%l%b%;<p><!> <!></p><!><!><!>" });
var cmp_default = _template("__tests__/tags/cmp.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_o = _filled_guard($scope0_reason, 3), $fg__input_p = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let x = input.a;
	let y = input.b;
	_html(`<p>${_text_mark($scope0_id, "#text/0", x === y ? "same" : "diff")} ${_text_mark($scope0_id, "#text/1", input.o === input.p ? "same" : "diff", 2, $scope0_reason, 0)}</p>`);
	_dynamic_tag($scope0_id, "#text/2", x, {});
	_dynamic_tag($scope0_id, "#text/3", y, {}, 8);
	_patch_render($scope0_id, "__tests__/tags/cmp.marko_0_input_o#8_input_p#9/setup", [$fg__input_o && "input_o", $fg__input_p && "input_p"], $scope0_reason, 0);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/cmp.marko_fill0", x, 1);
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/cmp.marko_fill1", y, 1);
	_scope($scope0_id, {
		input_o: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.o,
		input_p: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.p,
		x,
		y
	}, "__tests__/tags/cmp.marko", 0, {
		input_o: ["input.o"],
		input_p: ["input.p"],
		x: "1:6",
		y: "2:6"
	}) || (_client_branch(input.a), _client_branch(input.b), $fg__input_o && _client_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_o", input.o, !_server_guard($scope0_reason, 3)), $fg__input_p && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 4)));
});

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
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !__tests__/template.marko_3",
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content${_shell_marker([[], []], ["#childScope/0>", $setup$2])}`,
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_obj = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_obj__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const Inner = { content: _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_html(`<b>${_text_mark($scope3_id, "#text/1", input.label, 1, $scope0_reason, 1)}</b>${_el_mark($scope3_id, "#b/0")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_label#0:5/subscribe", _client_guard($scope0_reason, 1));
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"));
				}, $scope2_id) };
				_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 2) << 7 | _updates_from($scope0_reason, 2) << 9);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				cmp_default({
					a: Inner,
					b: Inner,
					o: input.obj,
					p: input.obj
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_obj#0:6/subscribe", _client_guard($scope0_reason, 2));
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_obj__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4"));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/1", input.obj.n, 1, $scope0_reason, 3)}</p>`);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	$fg__input_obj && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_obj#6/subscribers", "input_obj");
	_scope($scope0_id, {
		input_label: input.label,
		input_obj: input.obj,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_obj/9": _write_if($scope0_reason, 2) && $input_obj__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_obj: ["input.obj"]
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), $fg__input_obj && _patch_write($scope0_id, "PatchMarkedWrite:input_obj", input.obj, !_server_guard($scope0_reason, 2)));
}, 1);
