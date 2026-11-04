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
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const item = { label: input.label };
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:label", item.label, !$sg__input_label);
		_if(() => {
			if (count > 0 && item.label) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", item.label, $wg__input_label)}</p>`);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_label#1:2/setup");
				_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_filled_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_2_label#1:2/setup", "label");
		_patch_render($scope1_id, "__tests__/template.marko_1_count#0:5_label#2/setup", _filled_guard($scope0_reason, 0) && "label");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			label: item.label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { label: "4:12" }), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe"), "__tests__/template.marko_1_count#0:5/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:count/7": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
