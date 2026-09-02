// tags/counter/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/counter/index.marko": "__tests__/tags/counter/index.marko !;b%;<!><!><!>",
	"__tests__/tags/counter/index.marko_1*shell": "__tests__/tags/counter/index.marko_1*shell !__tests__/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template_persisted("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/counter/index.marko_1");
			_patch_value($scope1_id, "__tests__/tags/counter/index.marko1", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", input.onCount || void 0);
			_scope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": input.onCount || void 0
			}, "__tests__/tags/counter/index.marko", "1:2", {
				count: "2:8",
				"TagVariableChange:count": ["countChange", "2:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/counter/index.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { input_onCount: input.onCount }, "__tests__/tags/counter/index.marko", 0, { input_onCount: ["input.onCount"] }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/counter/index.marko0", input.onCount);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E lDb%l/${_w0}&l`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `E lDb%l/${_w0}&l`)("b%c"), ((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const plain = _resume((next) => {
		last = next;
	}, "__tests__/template.marko_0/plain", $scope0_id);
	const tenfold = _resume((next) => {
		last = next * 10;
	}, "__tests__/template.marko_0/tenfold", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 1)}</h1><p>Last ${_text_resume($scope0_id, "#text/1", last, 2)}</p>`);
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 2),
		2: _mask_group($scope0_owned, 3)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope);
	counter_default({
		show: input.show,
		onCount: input.big ? tenfold : plain
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		plain,
		tenfold,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		plain: "2:8",
		tenfold: "3:8"
	});
	_resume_branch($scope0_id);
}, 1, () => [counter_default]);
