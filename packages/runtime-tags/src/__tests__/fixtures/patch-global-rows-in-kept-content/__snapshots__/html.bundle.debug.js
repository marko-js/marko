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
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D%c%;<p><!> <!></p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global_brand__closures = new Set();
	const $input_n__closures = new Set();
	const $global$1 = $global();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<h1>${_text_mark($scope1_id, "#text/0", $global$1.brand, 1, 4, 0)}</h1>`);
		_for_until(input.n, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "#text/0", $global$1.brand, 1, 4, 0)} ${_text_mark($scope2_id, "#text/1", i, 2, $scope0_reason, 0)}</p>`);
			_subscribe($wi__input_n && $global_brand__closures, _scope($scope2_id, {
				_: $wi__input_n && _scope_with_id($scope1_id),
				"ClosureSignalIndex:$global_brand/5": $wi__input_n && 1
			}, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_$global_brand#0:6/subscribe");
		}, 0, $scope1_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
		_subscribe($wi__input_n && $global_brand__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_n__closures, _scope($scope1_id, { _: $wi__input_n && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_n#0:3/subscribe"), "__tests__/template.marko_1_$global_brand#0:6/subscribe");
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:$global_brand/5": $wi__input_n && _unfilled_if($scope0_reason, 0) && $global_brand__closures,
		"ClosureScopes:input_n/4": $wi__input_n && _unfilled_if($scope0_reason, 0) && $input_n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
