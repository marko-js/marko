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
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D%l")};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_count#0:5/init __tests__/template.marko_2_count#0:5_label#1:1/init;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $input_label__closures = new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const $wrapper_content__label__closures = new Set();
		const label = input.label;
		_filled_guard($scope0_reason, 0) ? _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", label) : _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
		_if(() => {
			if (input.label) {
				const $scope2_id = _scope_id();
				if ($scope0_page) _if(() => {
					if (count > 0 && label) {
						const $scope3_id = _scope_id();
						_html(`<p>${_text_resume($scope3_id, "#text/0", label, $wg__input_label)}</p>`);
						$scope1_page && _subscribe($wi__input_label && $wrapper_content__label__closures, _scope($scope3_id, {}, "__tests__/template.marko", "5:6"), "__tests__/template.marko_3_label#1:1/subscribe", $wg__input_label);
						return 0;
					}
				}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
				$scope1_page && _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_count#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_label, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:label/8": $wi__input_label && $wrapper_content__label__closures
		}, "__tests__/template.marko", "2:2", { label: "3:10" }), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:count/7": $count__closures,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
