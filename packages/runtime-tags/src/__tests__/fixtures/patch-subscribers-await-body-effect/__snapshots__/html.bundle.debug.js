// template.marko
const $Label_content__walks = "D%c%l";
const $Label_content__template = "<b><!> <!></b>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": `__tests__/template.marko_1*content #childScope/0>;${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($Label_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($Label_content__template)}`,
	"__tests__/template.marko_0_#text#0/await": `__tests__/template.marko_0_#text#0/await #childScope/0>;${((_w0) => `/${_w0}&D l`)($Label_content__walks)};${((_w0) => `${_w0}<p> </p>`)($Label_content__template)}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 3), $cg__input_p = _client_guard($scope0_reason, 2), $sg__input_n = _server_guard($scope0_reason, 3), $wi__input_n = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_m__closures = new Set();
	_await($scope0_id, "#text/0", input.p, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = new Set();
		const Label = { content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<b>${_text_mark($scope2_id, "#text/0", v, 1, $scope0_reason, 2)} ${_text_mark($scope2_id, "#text/1", input.n, 2, $scope0_reason, 3)}</b>`);
			$cg__input_n && _patch_render($scope2_id, "__tests__/template.marko_2_input_n#0:4/subscribe");
			$cg__input_p && _patch_render($scope2_id, "__tests__/template.marko_2_v#1:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_n__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_n/6": $wi__input_n && 1
			}, "__tests__/template.marko", "2:4"), $cg__input_n && "__tests__/template.marko_2_input_n#0:4/subscribe"), $cg__input_p && "__tests__/template.marko_2_v#1:4/subscribe");
		}, $scope1_id) };
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Label.content({});
		_patch_child_end();
		const twice = input.n * 2;
		_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "PatchMarkedWrite:twice", twice, !$sg__input_n);
		_html(`<p>${_text_mark($scope1_id, "#text/1", input.n + input.m, 1, $scope0_reason, 1)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1_input_n#0:4_twice#5", 1, _filled_guard($scope0_reason, 3), [">input_n", "twice"]);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_n#0:4/subscribe", $cg__input_n);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_m#0:5/subscribe");
		_patch_render($scope1_id, "__tests__/template.marko_1_input_n#0:4_input_m#0:5/setup", [_filled_guard($scope0_reason, 3) && ">input_n", _filled_guard($scope0_reason, 4) && ">input_m"], $scope0_reason, 1);
		$cg__input_n && _patch_render($scope1_id, "__tests__/template.marko_1_input_n#0:4_twice#5/setup");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_m__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_n__closures, _scope($scope1_id, {
			twice,
			"ClosureScopes:v/8": _write_if($scope0_reason, 2) && $await_content__v__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { twice: "6:10" }), $cg__input_n && "__tests__/template.marko_1_input_n#0:4/subscribe"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_1_input_m#0:5/subscribe");
	}, 1, "__tests__/template.marko_1*content", _unfilled_if($scope0_reason, 2), 1);
	_scope($scope0_id, {
		input_n: input.n,
		input_m: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.m,
		"ClosureScopes:input_n/6": $wi__input_n && $input_n__closures,
		"ClosureScopes:input_m/7": _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && $input_m__closures
	}, "__tests__/template.marko", 0, {
		input_n: ["input.n"],
		input_m: ["input.m"]
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !$sg__input_n), _filled_guard($scope0_reason, 4) && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_m", input.m, !_server_guard($scope0_reason, 4)));
}, 1);
