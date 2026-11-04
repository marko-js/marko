// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<i> </i>";
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Inner_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Inner_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` b/${_w0}&`)($Inner_content__walks)};${((_w0) => `<button>+</button>${_w0}`)($Inner_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	const Inner = { content: _content("__tests__/template.marko_1*content", ({ k }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<i>${_text_mark($scope1_id, "#text/0", input.x + k, 1, (1 | $uf__input_x) << 1, 0)}</i>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_x#0:4_k#3/setup", _filled_guard($scope0_reason, 0) && ">input_x", (1 | $uf__input_x) << 1, 0);
		_subscribe(_unfilled_if((1 | $uf__input_x) << 1, 0) && $wi__input_x && $input_x__closures, _scope($scope1_id, {
			k: $wi__input_x && k,
			_: ($wi__input_x || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { k: "3:17" }), _client_guard((1 | $uf__input_x) << 1, 0) && "__tests__/template.marko_1_input_x#0:4/subscribe");
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	Inner.content({ k: n });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: input.x,
		n,
		"ClosureScopes:input_x/6": $wi__input_x && $input_x__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
}, 1);
