// template.marko
const $Info_content__walks = "b%c";
const $Info_content__template = "<!><!><!>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content __tests__/template.marko_4_count#0:6/init;D%c%c%;<p><!>:<!>:<!></p>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await __tests__/template.marko_4_count#0:6/init;D%c%c%;<p><!>:<!>:<!></p>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const Info = { content: _content("__tests__/template.marko_2*content", ({ id, value }) => {
		const $scope2_id = _scope_id();
		const $Info_content__id__closures = new Set();
		const $Info_content__value__closures = new Set();
		const $scope2_reason = _scope_reason(), $wg__id = _write_guard($scope2_reason, 0), $wi__id = _write_if($scope2_reason, 0), $scope2_page = _page_render(), $cg__value = _client_guard($scope2_reason, 1);
		_try($scope2_id, "#text/0", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", value, (v) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_patch_text($scope4_id, "#text/0", id, void 0, $scope2_reason, 0)}:${_patch_text($scope4_id, "#text/1", v, 2, $scope2_reason, 1)}:${_text_resume($scope4_id, "#text/2", count, 2)}</p>`);
				_unfilled_if($scope2_reason, 0) && _patch_init($scope4_id, _client_guard($scope2_reason, 0) ? "__tests__/template.marko_4_id#2:3/init" : "__tests__/template.marko_4_id#2:3/subscribe");
				$scope2_page && _subscribe(_unfilled_if($scope2_reason, 0) && $Info_content__id__closures, _subscribe($count__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_4_count#0:6/subscribe"), "__tests__/template.marko_4_id#2:3/subscribe");
			}, 1, "__tests__/template.marko_4*content");
			_unfilled_if($scope2_reason, 1) && _patch_init($scope3_id, $cg__value ? "__tests__/template.marko_3_value#2:4/init" : "__tests__/template.marko_3_value#2:4/subscribe");
			$scope2_page && _subscribe(_unfilled_if($scope2_reason, 1) && $Info_content__value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4"), $cg__value && "__tests__/template.marko_3_value#2:4/subscribe", 0);
			_resume_branch($scope3_id);
		}, () => {
			const $scope5_reason = _scope_reason(), $scope5_page = _page_render();
			const $scope5_id = _scope_id();
			_html(`loading ${_text_resume($scope5_id, "#text/0", id, $wg__id * 2)}`);
			$scope5_page && _subscribe($wi__id && $Info_content__id__closures, _scope($scope5_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:id/9": $wi__id && 1
			}, "__tests__/template.marko", "7:6"), "__tests__/template.marko_5_id#2:3/subscribe", $wg__id);
			$wg__id || _resume_branch($scope5_id);
		}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_3*content");
		$scope2_page ? _scope($scope2_id, {
			id,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:id/9": $wi__id && $Info_content__id__closures,
			"ClosureScopes:value/10": _write_if($scope2_reason, 1) && _unfilled_if($scope2_reason, 1) && $Info_content__value__closures
		}, "__tests__/template.marko", "2:2", { id: "2:16" }) : _filled_guard($scope2_reason, 0) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", id, !_server_guard($scope2_reason, 0));
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3);
		const $childScope = _patch_child($scope1_id, "#childScope/0", void 0, $scope0_id);
		Info.content({
			id: item,
			value: input.value
		});
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_value#0:5/init");
		$scope0_page && _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "10:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value,
		count,
		"ClosureScopes:count/8": $count__closures
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.value, !_server_guard($scope0_reason, 2));
}, 1);
