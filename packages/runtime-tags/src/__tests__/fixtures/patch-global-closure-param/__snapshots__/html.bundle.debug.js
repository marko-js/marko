// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<div><!></div>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D%l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D%l")};${((_w0) => `${_w0}<button> </button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $z__closures = new Set();
	const $global_mark__closures = new Set();
	const $global$1 = $global();
	let n = 0;
	const z = input.v + $global$1.flag;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<p${_attr("data-z", z + $global$1.mark, $scope1_id, "PatchAttr:#p/0 data-z", (2 | _updates_from($scope0_reason, 0)) << 1, 0)}></p>${_el_mark($scope1_id, "#p/0")}`);
		_patch_render($scope1_id, "__tests__/template.marko_1_z#0:7_$global_mark#0:9/setup", [_filled_guard((2 | _updates_from($scope0_reason, 0)) << 1, 0) && ">z", ">$global_mark"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
		_subscribe(($scope0_page || $wi__input_v) && $global_mark__closures, _subscribe(_unfilled_if((2 | _updates_from($scope0_reason, 0)) << 1, 0) && $z__closures, _scope($scope1_id, { _: ($scope1_page || $wi__input_v) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard((2 | _updates_from($scope0_reason, 0)) << 1, 0) && "__tests__/template.marko_1_z#0:7/subscribe"), "__tests__/template.marko_1_$global_mark#0:9/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_flag#6/subscribe", $scope0_id, _client_guard($scope0_reason, 0));
	_fill_global_subscribe("__tests__/template.marko_0_$global_mark#9/subscribe", $scope0_id, _client_guard((2 | _updates_from($scope0_reason, 0)) << 1, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_v#5_$global_flag#6/setup", [_filled_guard($scope0_reason, 0) && "input_v", "$global_flag"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
	_scope($scope0_id, {
		input_v: _unfilled_if($scope0_reason, 0) && input.v,
		n,
		z: (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && z,
		"ClosureScopes:z/9": ($scope0_page || $wi__input_v) && (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && $z__closures,
		"ClosureScopes:$global_mark/10": ($scope0_page || $wi__input_v) && (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && $global_mark__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		n: "1:6",
		z: "2:8"
	});
}, 1);
