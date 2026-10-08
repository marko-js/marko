// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", n, 1);
	$scope0_page && _scope($scope0_id, { c: n });
});

// template.marko
const SITE = "Shop";
function throwIt() {
	throw new Error("boom");
}
_shells({
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `<p><!> <!></p>${_w0}<!><!>`)($template)}`)(),
	a: "a;D%;<main><!></main>",
	a1: "a1; ; "
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", SITE, void 0, 0, 0)} ${_patch_text($scope1_id, "b", input.title, 2, $scope0_reason, 1)}</p>`);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "c", $childScope);
		counter_default({});
		_if(() => {
			if (input.fail) {
				const $scope3_id = _scope_id();
				_html(_patch_text($scope3_id, "a", throwIt(), void 0, 0, 0));
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "d", 1, _source_guard($scope0_reason, 2), void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			c: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 1) && "a4"), _client_guard($scope0_reason, 2) && "a5");
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("caught");
	}, void 0, "a6", "a0");
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 1) && $input_title__closures,
		g: _unfilled_if($scope0_reason, 2) && $input_fail__closures
	});
}, 1);
