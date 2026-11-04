// template.marko
const $template = "<pre id=log></pre><!><!>";
const $walks = "/&b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;/&;",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;/&;",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;/&b%;<pre id=log></pre><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 1), $cg__input_x = _client_guard($scope0_reason, 1), $wi__input_x__OR__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $fn2__closures = new Set();
	const $input_promise__closures = new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 1));
	const fn = _bind_resume(() => input.x, "__tests__/template.marko_0/fn", $scope0_id);
	_html("<pre id=log></pre>");
	const Use = { content: _content("__tests__/template.marko_3*content", ({ fn, where }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $fg__fn = _filled_guard($scope3_reason, 1), $fg__where = _filled_guard($scope3_reason, 2);
		_script($scope3_id, "__tests__/template.marko_3_fn#2_where#3", 0, ($fg__fn || $fg__where) && (_client_guard($scope3_reason, 1) ? 2 : 1), [
			$fg__fn && "fn",
			_filled_guard($scope0_reason, 1) && ">input_x",
			$fg__where && "where"
		], "__tests__/template.marko_3_fn#2_where#3/setup", $scope3_reason, 0);
		_scope($scope3_id, {
			fn,
			where
		}, "__tests__/template.marko", "3:2", {
			fn: "3:15",
			where: "3:19"
		}) || ($fg__fn && _patch_write($scope3_id, "PatchMarkedWrite:fn", fn, !_server_guard($scope3_reason, 1)), $fg__where && _patch_write($scope3_id, "PatchMarkedWrite:where", where, 1));
	}, $scope0_id) };
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Use.content({
		fn,
		where: "early"
	});
	_patch_child_end();
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 2);
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_set_scope_reason($uf__input_x << 1 | $uf__input_x << 3);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1);
			Use.content({
				fn,
				where: "late"
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_fn#0:6/subscribe", $cg__input_x);
			_subscribe(_unfilled_if($scope0_reason, 1) && $fn2__closures, _scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "12:4"), $cg__input_x && "__tests__/template.marko_2_fn#0:6/subscribe", 0);
			_resume_branch($scope2_id);
		}, 1, "__tests__/template.marko_2*content", $ui__input_promise, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_promise#0:5/subscribe", 1);
		$wi__input_x__OR__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:2"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_x__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_scope($scope0_id, {
		input_x: input.x,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:fn/8": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $fn2__closures,
		"ClosureScopes:input_promise/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_x: ["input.x"] });
}, 1);
