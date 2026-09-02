// tags/toggle-panel/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/toggle-panel/index.marko": "__tests__/tags/toggle-panel/index.marko !; ;<div></div>",
	"__tests__/tags/toggle-panel/index.marko_1*shell": "__tests__/tags/toggle-panel/index.marko_1*shell;D ;<em> </em>"
});
var toggle_panel_default = _template_persisted("__tests__/tags/toggle-panel/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_owned, 2)}</em>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/toggle-panel/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/toggle-panel/index.marko_1*shell"], $scope0_owned, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $sg__input_show)}`);
	$scope0_reason ? _scope($scope0_id, { input_title: input.title }, "__tests__/tags/toggle-panel/index.marko", 0, { input_title: ["input.title"] }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/toggle-panel/index.marko0", input.title);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)(" b"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: 3,
		1: 1,
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	toggle_panel_default({
		show: count % 2 === 0,
		title: input.title
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" }) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [toggle_panel_default]);
