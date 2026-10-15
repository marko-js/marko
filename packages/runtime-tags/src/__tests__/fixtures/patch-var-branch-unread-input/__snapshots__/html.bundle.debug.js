// tags/user-info.marko
const $template$1 = "";
const $walks$1 = "";
_shells({ "__tests__/tags/user-info.marko": "^__tests__/tags/user-info.marko," });
var user_info_default = _template("__tests__/tags/user-info.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.user;
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=inc> </button>${_w0}<p> </p><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => ` D 0${_w0}&lD l%c`)("");
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` D 0${_w0}&lD l%c`)("")};${((_w0) => `<button class=inc> </button>${_w0}<p> </p><!><!>`)("")}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("")}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _patch_child($scope0_id, "#childScope/2");
	let info = user_info_default({ user: input.user });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_info#12/var");
	_html(`<p>${_patch_text($scope0_id, "#text/4", info.name, void 0, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope2 = _patch_child($scope1_id, "#childScope/0");
			let info2 = user_info_default({ user: input.user2 });
			_client_guard($scope0_reason, 2) && _var($scope1_id, "#scopeOffset/1", $childScope2, "__tests__/template.marko_1_info2#3/var");
			_html(`<p>${_patch_text($scope1_id, "#text/2", info2.name, void 0, $scope0_reason, 2)}</p>`);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/5", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_user2: _unfilled_if($scope0_reason, 1) && input.user2,
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_user2: ["input.user2"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.user2, !_server_guard($scope0_reason, 2));
}, 1);
