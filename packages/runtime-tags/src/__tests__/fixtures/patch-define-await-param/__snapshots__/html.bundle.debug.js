// template.marko
const $Info_content__walks = "b%c";
const $Info_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Info_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Info_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content __tests__/template.marko_3_count#0:6/init;D%c%c%;<p><!>:<!>:<!></p>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await __tests__/template.marko_3_count#0:6/init;D%c%c%;<p><!>:<!>:<!></p>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Info_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Info_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const Info = { content: _content("__tests__/template.marko_1*content", ({ id, value }) => {
		const $scope1_id = _scope_id();
		const $Info_content__id__closures = new Set();
		const $Info_content__value__closures = new Set();
		const $scope1_reason = _scope_reason(), $wg__id = _write_guard($scope1_reason, 0), $wi__id = _write_if($scope1_reason, 0), $scope1_page = _page_render(), $cg__value = _client_guard($scope1_reason, 1);
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", value, (v) => {
				const $scope3_id = _scope_id();
				_html(`<p>${_patch_text($scope3_id, "#text/0", id, void 0, $scope1_reason, 0)}:${_patch_text($scope3_id, "#text/1", v, 2, $scope1_reason, 1)}:${_text_resume($scope3_id, "#text/2", count, 2)}</p>`);
				_unfilled_if($scope1_reason, 0) && _patch_init($scope3_id, _client_guard($scope1_reason, 0) ? "__tests__/template.marko_3_id#1:3/init" : "__tests__/template.marko_3_id#1:3/subscribe");
				$scope1_page && _subscribe(_unfilled_if($scope1_reason, 0) && $Info_content__id__closures, _subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_3_count#0:6/subscribe"), "__tests__/template.marko_3_id#1:3/subscribe");
			}, 1, "__tests__/template.marko_3*content");
			_unfilled_if($scope1_reason, 1) && _patch_init($scope2_id, $cg__value ? "__tests__/template.marko_2_value#1:4/init" : "__tests__/template.marko_2_value#1:4/subscribe");
			$scope1_page && _subscribe(_unfilled_if($scope1_reason, 1) && $Info_content__value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), $cg__value && "__tests__/template.marko_2_value#1:4/subscribe", 0);
			_resume_branch($scope2_id);
		}, () => {
			const $scope4_reason = _scope_reason(), $scope4_page = _page_render();
			const $scope4_id = _scope_id();
			_html(`loading ${_text_resume($scope4_id, "#text/0", id, $wg__id * 2)}`);
			$scope4_page && _subscribe($wi__id && $Info_content__id__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:id/8": $wi__id && 1
			}, "__tests__/template.marko", "7:6"), "__tests__/template.marko_4_id#1:3/subscribe", $wg__id);
			$wg__id || _resume_branch($scope4_id);
		}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_2*content");
		$scope1_page ? _scope($scope1_id, {
			id,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:id/8": $wi__id && $Info_content__id__closures,
			"ClosureScopes:value/9": _write_if($scope1_reason, 1) && _unfilled_if($scope1_reason, 1) && $Info_content__value__closures
		}, "__tests__/template.marko", "2:2", { id: "2:16" }) : _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", id, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Info.content({
		id: input.id,
		value: input.value
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:count/7": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
