// template.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Label_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Label_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0), $fg__input_suffix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	let count = 0;
	const Label = { content: _content("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__n = _filled_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "#text/0", n + input.suffix, 1, (1 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_suffix#0:4_n#3/setup", [_filled_guard($scope0_reason, 0) && ">input_suffix", $fg__n && "n"], (1 | _updates_from($scope0_reason, 0)) << 1, 0);
		_subscribe(_unfilled_if((1 | _updates_from($scope0_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			n: _unfilled_if($scope0_reason, 0) && n,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { n: "2:17" }), _client_guard((1 | _updates_from($scope0_reason, 0)) << 1, 0) && "__tests__/template.marko_1_input_suffix#0:4/subscribe") || $fg__n && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:n", n, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Label.content({ n: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_suffix && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_suffix#4/subscribers", "input_suffix");
	_scope($scope0_id, {
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix/6": $wi__input_suffix && $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) || $fg__input_suffix && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
