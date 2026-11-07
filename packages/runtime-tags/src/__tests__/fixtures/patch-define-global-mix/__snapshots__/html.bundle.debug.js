// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Badge_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($Badge_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global_flag__closures = new Set();
	const $global$1 = $global();
	const Badge = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<p>${_text_mark($scope1_id, "#text/0", input.value + $global$1.flag, 1, 6, 0)}</p>`);
		_unfilled_if($scope1_reason, 0) && _patch_write($scope1_id, "PatchWrite:input_value", input.value, 1);
		_subscribe($global_flag__closures, _scope($scope1_id, {
			input_value: _unfilled_if($scope1_reason, 0) && input.value,
			_: ($scope1_page || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { input_value: ["input.value", "1:15"] }), "__tests__/template.marko_1_$global_flag#0:8/subscribe");
	}, $scope0_id) };
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Badge.content({ value: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_flag#8/subscribe", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:$global_flag/3": $global_flag__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1);
