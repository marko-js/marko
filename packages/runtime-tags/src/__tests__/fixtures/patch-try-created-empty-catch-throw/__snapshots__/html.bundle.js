// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", "ok")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", n, 1);
	$scope0_page && _scope($scope0_id, { c: n });
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template)),
	a: "a; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (v) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", v, void 0, $scope0_reason, 2)}</em>`);
					_scope($scope3_id, {});
				}, 1, "a0");
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "b", $childScope);
				counter_default({});
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					b: _existing_scope($childScope)
				}), _client_guard($scope0_reason, 2) && "a4");
			}, void 0, () => {}, void 0, "a5", "a2");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.promise,
		f: $input_promise__closures
	});
}, 1, () => [counter_default]);
