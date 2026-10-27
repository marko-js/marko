// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D%l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const label = input.label;
		const shout = label + "!";
		_filled_guard($scope0_reason, 0) ? _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", shout) : _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
		if ($scope0_page) _if(() => {
			if (count > 0 && shout) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", shout, $wg__input_label)}</p>`);
				$scope1_page && _scope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		$scope1_page && _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			shout,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { shout: "4:10" }), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:4/subscribe"), "__tests__/template.marko_1_count#0:5/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_label/6": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:count/7": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
