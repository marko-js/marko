// tags/label-view.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks);
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/label-view.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/label-view.marko_1*content;${_w0};${_w1}`)($Show_content__walks, $Show_content__template),
	"__tests__/tags/label-view.marko": /*@__PURE__*/ (() => `__tests__/tags/label-view.marko;${((_w0) => `b/${_w0}&b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Show = { content: _content_elide("__tests__/tags/label-view.marko_1*content", ({ a, b, flag }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__b__OR__flag = _client_guard($scope1_reason, 2), $cg__a__OR__flag = _client_guard($scope1_reason, 1), $cg__a__OR__b = _client_guard($scope1_reason, 0), $scope1_page = _page_render();
		const get = flag ? a : b;
		_html(`<output></output>${_el_resume($scope1_id, "#output/0")}`);
		_script($scope1_id, "__tests__/tags/label-view.marko_1_get#7");
		_filled_guard($scope1_reason, 3) && _patch_effect($scope1_id, _client_guard($scope1_reason, 3) ? "PatchQueuedEffect:__tests__/tags/label-view.marko_1_get#7" : "PatchEffect:__tests__/tags/label-view.marko_1_get#7", "get");
		$cg__b__OR__flag && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !(_filled_guard($scope1_reason, 4) && $cg__b__OR__flag));
		$cg__a__OR__flag && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !(_filled_guard($scope1_reason, 5) && $cg__a__OR__flag));
		$cg__a__OR__b && _patch_write($scope1_id, "PatchMarkedWrite:flag", flag, !(_filled_guard($scope1_reason, 6) && $cg__a__OR__b));
		_patch_join_init($scope1_id, "__tests__/tags/label-view.marko_1_a#3_b#4_flag#5/init", $scope1_reason, 3, _filled_guard($scope1_reason, 4) && "a", _filled_guard($scope1_reason, 5) && "b", _filled_guard($scope1_reason, 6) && "flag");
		$scope1_page ? _scope($scope1_id, {
			a: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 3)) && a,
			b: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 3)) && b,
			flag: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 3)) && flag,
			get
		}, "__tests__/tags/label-view.marko", "1:2", {
			a: "1:16",
			b: "1:19",
			flag: "1:22",
			get: "2:10"
		}) : _filled_guard($scope1_reason, 3) && _patch_write($scope1_id, "PatchMarkedWrite:get", get, !_server_guard($scope1_reason, 3));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 4) << 9 | _mask_group($scope0_reason, 5) << 11 | _mask_group($scope0_reason, 6) << 13);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Show.content({
		a: input.a,
		b: input.b,
		flag: input.flag
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/label-view.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(1950 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 11));
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	label_view_default({
		a: upper ? up : low,
		b: low,
		flag: true
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_effect($scope0_id, "PatchInit:__tests__/template.marko_0_upper#5_up#6_low#7/init", _filled_guard($scope0_reason, 0) && "up", _filled_guard($scope0_reason, 0) && "low");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		upper,
		up,
		low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		up: "2:8",
		low: "3:8"
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
