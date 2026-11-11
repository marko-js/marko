// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : () => "-";
	_html(`<button>${_text_mark($scope0_id, "#text/1", g())}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_render($scope0_id, "__tests__/tags/card.marko_0_input_fn#4_open#5/setup", $fg__input_fn && "input_fn");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_fn: input.fn,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_fn: ["input.fn"],
		open: "1:6"
	}) || $fg__input_fn && _patch_write($scope0_id, "PatchMarkedWrite:input_fn", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content; ; ",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await; ; ",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_promise__closures = new Set();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		_await($scope2_id, "#text/0", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(_text_mark($scope3_id, "#text/0", v, 1, $scope0_reason, 1));
			_scope($scope3_id, {}, "__tests__/template.marko", "2:4");
		}, 1, "__tests__/template.marko_3*content", $ui__input_promise && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_promise#0:4/subscribe", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_promise#0:4/subscribe", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({ fn: _bind_resume(function() {
			return "f:" + input.label;
		}, "__tests__/template.marko_1/fn", $scope1_id) });
		_patch_child_end();
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:3/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope)
		}, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_1_input_label#0:3/subscribe", 0);
		_write_guard($scope0_reason, 0) && _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_2*content", 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_promise/6": $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
