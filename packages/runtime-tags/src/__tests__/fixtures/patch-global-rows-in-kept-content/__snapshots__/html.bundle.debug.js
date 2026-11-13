// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 0), $wi__input_n = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $global$1 = $global();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<h1>${_text_mark($scope1_id, "#text/0", $global$1.brand, $scope1_page)}</h1>`);
		_for_until(input.n, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "#text/0", $global$1.brand, $scope1_page)} ${_escape(i)}</p>`);
			_fill_global_subscribe("__tests__/template.marko_2_$global_brand#0:6", $scope2_id, 1);
			_scope($scope2_id, {}, "__tests__/template.marko", "3:4");
		}, 0, $scope1_id, "#text/1", $wg__input_n, $wg__input_n, 0, 0, 1);
		_fill_global_subscribe("__tests__/template.marko_1_$global_brand#0:6", $scope1_id, 1);
		$cg__input_n && _patch_render($scope1_id, "__tests__/template.marko_1_input_n#0:3/subscribe");
		_subscribe($wi__input_n && $input_n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_n && "__tests__/template.marko_1_input_n#0:3/subscribe", $wg__input_n || $scope1_page);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		input_n: input.n,
		"ClosureScopes:input_n/4": $wi__input_n && $input_n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_n: ["input.n"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_n#3/subscribers", "input_n");
}, 1);
