// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D ;<p> </p>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $ui__input_promise__OR__input_label2 = _unfilled_if($scope0_reason, 0), $ui__input_promise = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id(), $ui__input_promise__OR__input_label = _unfilled_if($scope0_reason, 0);
		const $await_content__x__closures = new Set();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:x", x, !_server_guard($scope0_reason, 1));
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "#text/0", x + ":" + input.label, 1, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/show-await.marko_2_x#1:2/subscribe");
			_patch_render($scope2_id, "__tests__/tags/show-await.marko_2_input_label#0:4_x#1:2/setup", ((_filled_guard($scope0_reason, 2) ? " >>input_label" : "") + (_filled_guard($scope0_reason, 1) ? " >x" : "")).slice(1), $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_promise__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "2:4"), _client_guard($scope0_reason, 2) && "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe"), _client_guard($scope0_reason, 1) && "__tests__/tags/show-await.marko_2_x#1:2/subscribe");
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("failed");
		}, 0, "__tests__/tags/show-await.marko_3*content", "__tests__/tags/show-await.marko_2*content", 1);
		$wi__input_promise__OR__input_label && _scope($scope1_id, {
			x: $wi__input_label && $ui__input_promise__OR__input_label && x,
			"ClosureScopes:x/6": $wi__input_promise && $wi__input_promise && $ui__input_promise__OR__input_label && $await_content__x__closures
		}, "__tests__/tags/show-await.marko", "1:2", { x: "1:8" });
	}, 1, "__tests__/tags/show-await.marko_1*content", $ui__input_promise, 1);
	_scope($scope0_id, {
		input_label: $wi__input_promise && $ui__input_promise__OR__input_label2 && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $wi__input_label && $ui__input_promise__OR__input_label2 && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && $ui__input_promise && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({
		promise: p,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
