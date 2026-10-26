// tags/frame.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1 a6 a7 a8;D%c%;<p class=b><!> <!></p>",
	a0: "a0 a10 a11 a12;D ;<p class=a> </p>",
	a: "a !a3;b%b b ;<!><!><button class=a>a</button><button class=b>b</button>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup], ["b>", $setup]))};${/*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)("D%l", "D%l")};${/*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $a__closures = /* @__PURE__ */ new Set();
	const $b__closures = /* @__PURE__ */ new Set();
	let a = 0;
	let b = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<main>");
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a");
			frame_default({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`<p class=a>${_text_resume($scope2_id, "a", input.label + ":0")}</p>`);
				$scope2_page && _subscribe($a__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id) });
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope1_id, "b");
			frame_default({ content: _content_elide("a1", () => {
				_scope_reason();
				const $scope3_page = _page_render();
				const $scope3_id = _scope_id();
				_html(`<p class=b>${_text_resume($scope3_id, "a", b)} ${_text_resume($scope3_id, "b", input.label + ":0", 2)}</p>`);
				$scope3_page && _subscribe($b__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cj: $wi__input_label && 1
				})));
			}, $scope1_id) });
			_html("</main>");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`<button class=a>a</button>${_el_resume($scope0_id, "b")}<button class=b>b</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		h: a,
		i: b,
		j: $wi__input_label && $input_label__closures,
		k: $a__closures,
		l: $b__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
