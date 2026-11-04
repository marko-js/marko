// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	let s = 1;
	const foo = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.x, 1, $scope0_reason, 0)}</em>`);
		$cg__input_x && _patch_render($scope1_id, "__tests__/template.marko_1_input_x#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), $cg__input_x && "__tests__/template.marko_1_input_x#0:4/subscribe");
	}, $scope0_id) };
	_if(() => {
		if (s) {
			const $scope2_id = _scope_id();
			_patch_child(0, "#childScope/0");
			foo.content({});
			_patch_child_end();
			_scope($scope2_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: input.x,
		s,
		"ClosureScopes:input_x/6": _write_if($scope0_reason, 0) && $input_x__closures
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		s: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_x#4/subscribers", "input_x");
}, 1);
