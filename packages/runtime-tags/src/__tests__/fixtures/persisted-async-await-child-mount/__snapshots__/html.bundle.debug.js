// tags/counter.marko
const $template$1 = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks$1 = "E%c%l l";
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0;E%c%l ;<div class=counter><span><!>: <!></span><button class=inc>+</button></div>" });
var counter_default = _template_persisted("__tests__/tags/counter.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<div class=counter><span>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}: ${_text_resume($scope0_id, "#text/1", n, 2)}</span><button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_value($scope0_id, "__tests__/tags/counter.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
}, 0, 0);

// template.marko
const $template = "<main><!><button id=c> </button></main>";
const $walks = "D%b D m";
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button id=c> </button></main>",
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1_#text#0/await;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (v) => {
				const $scope2_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope);
				counter_default({
					label: v,
					start: 1
				});
				_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:6");
			}, 1, "__tests__/template.marko_1_#text#0/await");
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`<button id=c>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_promise: input.promise,
		count
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		count: "1:6"
	});
}, 1, () => [counter_default]);
