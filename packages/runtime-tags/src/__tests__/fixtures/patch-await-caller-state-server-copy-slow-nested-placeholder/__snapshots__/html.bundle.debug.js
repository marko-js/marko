// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 1)}:${_text_resume($scope1_id, "#text/1", x, 2, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "__tests__/tags/show-await.marko_1_input_label#0:4/init" : "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2"), $cg__input_label && "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { "ClosureScopes:input_label/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content;D ;<small> </small>",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_3*content": /*@__PURE__*/ (() => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([["__tests__/template.marko_3_p#0:8/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D l%;<h1> </h1><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D l%;<h1> </h1><!><!>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;D ;<small> </small>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%b%;<!><!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=swap>swap</button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_title = _client_guard($scope0_reason, 1), $cg__input_note = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $p__closures = new Set();
	const $input_title__closures = new Set();
	const $input_note__closures = new Set();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.title, (title) => {
			const $scope2_id = _scope_id();
			_html(`<h1>${_text_resume($scope2_id, "#text/0", title, 1, $scope0_reason, 1)}</h1>`);
			_try($scope2_id, "#text/1", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_set_scope_reason(2 | _mask_group($scope0_reason, 2) << 3);
				const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0);
				show_await_default({
					promise: p,
					label: input.label
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_label ? "__tests__/template.marko_3_input_label#0:6/init" : "__tests__/template.marko_3_input_label#0:6/subscribe");
				_subscribe($p__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope2_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "7:6"), $cg__input_label && "__tests__/template.marko_3_input_label#0:6/subscribe"), "__tests__/template.marko_3_p#0:8/subscribe");
			}, () => {
				const $scope5_reason = _scope_reason();
				const $scope5_id = _scope_id();
				_html("<em>inner</em>");
			}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_3*content", 1, 0, 2);
			_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
		}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 1), 1);
		_await($scope1_id, "#text/1", input.note, (note) => {
			const $scope6_id = _scope_id();
			_html(`<small>${_text_resume($scope6_id, "#text/0", note, 1, $scope0_reason, 3)}</small>`);
			_scope($scope6_id, {}, "__tests__/template.marko", "12:4");
		}, 1, "__tests__/template.marko_6*content", _unfilled_if($scope0_reason, 3) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_title ? "__tests__/template.marko_1_input_title#0:5/init" : "__tests__/template.marko_1_input_title#0:5/subscribe");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_note ? "__tests__/template.marko_1_input_note#0:7/init" : "__tests__/template.marko_1_input_note#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), $cg__input_title && "__tests__/template.marko_1_input_title#0:5/subscribe", 0), $cg__input_note && "__tests__/template.marko_1_input_note#0:7/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html("<em>outer</em>");
	}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		"ClosureScopes:input_label/10": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures,
		"ClosureScopes:p/12": $p__closures,
		"ClosureScopes:input_title/9": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_title__closures,
		"ClosureScopes:input_note/11": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_note__closures
	}, "__tests__/template.marko", 0);
}, 1);
