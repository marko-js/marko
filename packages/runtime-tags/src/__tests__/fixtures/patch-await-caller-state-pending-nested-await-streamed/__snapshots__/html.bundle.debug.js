// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_4*content": "__tests__/tags/show-await.marko_4*content;D ;<em> </em>",
	"__tests__/tags/show-await.marko_3*content": "__tests__/tags/show-await.marko_3*content,<i>inner loading</i>",
	"__tests__/tags/show-await.marko_2_#text#0/await": "__tests__/tags/show-await.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D%c%l%;<p><!>:<!></p><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D%c%l%;<p><!>:<!></p><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_inner = _client_guard($scope0_reason, 3), $wi__input_inner = _write_if($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_inner__closures = new Set();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope1_id, "#text/1", x, 2, $scope0_reason, 1)}</p>`);
		_try($scope1_id, "#text/2", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.inner, (y) => {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", y, 1, $scope0_reason, 3)}</em>`);
				_scope($scope4_id, {}, "__tests__/tags/show-await.marko", "5:6");
			}, 1, "__tests__/tags/show-await.marko_4*content", _unfilled_if($scope0_reason, 3) && 2, 1);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_inner ? "__tests__/tags/show-await.marko_2_input_inner#0:5/init" : "__tests__/tags/show-await.marko_2_input_inner#0:5/subscribe");
			$wi__input_inner && _subscribe(_unfilled_if($scope0_reason, 3) && $input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), $cg__input_inner && "__tests__/tags/show-await.marko_2_input_inner#0:5/subscribe", 0);
			$wi__input_inner && _resume_branch($scope2_id);
		}, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("<i>inner loading</i>");
		}, void 0, "__tests__/tags/show-await.marko_3*content", void 0, "__tests__/tags/show-await.marko_2*content", 1, 0, 2);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_label ? "__tests__/tags/show-await.marko_1_input_label#0:4/init" : "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2"), $cg__input_label && "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, {
		"ClosureScopes:input_inner/7": $wi__input_inner && _unfilled_if($scope0_reason, 3) && $input_inner__closures,
		"ClosureScopes:input_label/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = Promise.resolve(0);
	let resolve = undefined;
	_html(`<button class=open>pend</button>${_el_resume($scope0_id, "#button/0")}<button${_attr("disabled", !resolve)} class=settle>settle</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_scope_reason(8 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	show_await_default({
		promise: p,
		label: input.label,
		inner: input.inner
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		resolve,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { resolve: "2:6" });
}, 1);
