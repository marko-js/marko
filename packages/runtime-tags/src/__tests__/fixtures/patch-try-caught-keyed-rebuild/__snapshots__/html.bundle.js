// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	$scope0_page && _scope($scope0_id, { c: n });
});

// template.marko
const SITE = "Shop";
function throwIt() {
	throw new Error("boom");
}
_shells({
	a1: "a1",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["c>", $setup]))};${/*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `<p><!> <!></p>${_w0}<!><!>`)($template)}`)(),
	a: "a; ;<main></main>",
	a3: "a3;b%;<!><!><!>",
	a0: "a0; ; "
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_pages = _client_guard($scope0_reason, 0), $wi__input_pages = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.pages, (page) => {
		const $scope1_id = _scope_id();
		const $for_content__page_title__closures = /* @__PURE__ */ new Set();
		const $for_content__page_fail__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "a", SITE, void 0, 0, 0)} ${_patch_text($scope2_id, "b", page.title, 2, $scope0_reason, 0)}</p>`);
			const $childScope = _patch_child($scope2_id, "c", 0);
			counter_default({});
			_patch_child_end();
			_if(() => {
				if (page.fail) {
					const $scope4_id = _scope_id();
					_html(_patch_text($scope4_id, "a", throwIt(), void 0, 0, 0));
					$scope0_page && _scope($scope4_id, {});
					return 0;
				}
			}, $scope2_id, "d", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_pages ? "a4" : "a5");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_pages ? "a6" : "a7");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__page_fail__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__page_title__closures, _scope($scope2_id, {
				_: $wi__input_pages && _scope_with_id($scope1_id),
				c: _existing_scope($childScope)
			}), $cg__input_pages && "a5"), $cg__input_pages && "a7");
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("caught");
		}, void 0, "a1", "a2", void 0, void 0, 1);
		$scope0_page && $wi__input_pages && _scope($scope1_id, {
			f: _unfilled_if($scope0_reason, 0) && $for_content__page_title__closures,
			g: _unfilled_if($scope0_reason, 0) && $for_content__page_fail__closures
		});
	}, "key", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
