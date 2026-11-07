// tags/toggle.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/toggle.marko": "__tests__/tags/toggle.marko;b%;<!><!><!>",
	"__tests__/tags/toggle.marko_1*shell": "__tests__/tags/toggle.marko_1*shell;b%;<!><!><!>"
});
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/toggle.marko_1_input_content#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, 1, 0, 0, ["__tests__/tags/toggle.marko_1*shell"], $scope0_reason, 1);
	$fg__input_content && $cg__input_open && _patch_render($scope0_id, "__tests__/tags/toggle.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/toggle.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && $cg__input_open && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D%l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $open__closures = new Set();
	let open = false;
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $wrapper_content__label__closures = new Set();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope0_reason, 0));
		_set_scope_reason(10);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		toggle_default({
			open,
			content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", label, 1, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_label#1:1/subscribe", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 0) && $wrapper_content__label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
			}, $scope1_id)
		});
		_patch_child_end();
		_filled_guard($scope0_reason, 0) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_label#1/subscribers", "label");
		_subscribe($open__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:label/8": $wi__input_label && $wrapper_content__label__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { label: "3:10" }), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe", 0), "__tests__/template.marko_1_open#0:5/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:open/7": $open__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
