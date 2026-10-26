// template.marko
const $template = "<pre id=log></pre><!><!>";
const $walks = "/&b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;/&;<!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;/&;<!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;/&b%;<pre id=log></pre><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 2), $wi__input_x__OR__input_promise = _write_if($scope0_reason, 0), $sg__input_x = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $fn2__closures = new Set();
	const $input_promise__closures = new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x);
	const fn = _bind_resume(() => input.x, "__tests__/template.marko_0/fn", $scope0_id);
	_html("<pre id=log></pre>");
	const Use = { content: _content("__tests__/template.marko_3*content", ({ fn, where }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		_script($scope3_id, "__tests__/template.marko_3_fn#2_where#3", 0);
		(_filled_guard($scope3_reason, 1) || _filled_guard($scope3_reason, 2)) && _patch_effect($scope3_id, _client_guard($scope3_reason, 1) || _client_guard($scope3_reason, 2) ? "PatchQueuedEffect:__tests__/template.marko_3_fn#2_where#3" : "PatchEffect:__tests__/template.marko_3_fn#2_where#3", _filled_guard($scope3_reason, 1) && "fn", _filled_guard($scope3_reason, 2) && "where");
		_client_guard($scope3_reason, 0) && _patch_init($scope3_id, "__tests__/template.marko_3_fn#2_where#3/init");
		$scope3_page ? _scope($scope3_id, {
			fn,
			where
		}, "__tests__/template.marko", "3:2", {
			fn: "3:15",
			where: "3:19"
		}) : (_filled_guard($scope3_reason, 1) && _patch_write($scope3_id, "PatchMarkedWrite:fn", fn, !_server_guard($scope3_reason, 1)), _filled_guard($scope3_reason, 2) && _patch_write($scope3_id, "PatchMarkedWrite:where", where, !_server_guard($scope3_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Use.content({
		fn,
		where: "early"
	});
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope2_id, "#childScope/0");
			Use.content({
				fn,
				where: "late"
			});
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_x ? "__tests__/template.marko_2_fn#0:6/init" : "__tests__/template.marko_2_fn#0:6/subscribe");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $fn2__closures, _scope($scope2_id, {
				_: $wi__input_x__OR__input_promise && _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "12:4"), $cg__input_x && "__tests__/template.marko_2_fn#0:6/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:5/init" : "__tests__/template.marko_1_input_promise#0:5/subscribe");
		$scope0_page && $wi__input_x__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_x__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	$scope0_page ? _scope($scope0_id, {
		input_x: input.x,
		fn: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && fn,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:fn/8": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $fn2__closures,
		"ClosureScopes:input_promise/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		fn: "2:8"
	}) : _filled_guard($scope0_reason, 1) && $cg__input_promise && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", fn, !$sg__input_x);
}, 1);
