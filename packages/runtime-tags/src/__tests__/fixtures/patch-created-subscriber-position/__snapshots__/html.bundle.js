// tags/frame.marko
const $template = "<section><!></section>";
const $setup = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a5: "a5 a10;D%c%;<p class=b><!> <!></p>",
	a2: "a2 a12;D ;<p class=a> </p>",
	a: "a !a7;b%b b ;<!><!><button class=a>a</button><button class=b>b</button>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup], ["b>", $setup])};${/*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)("D%l", "D%l")};${/*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template, $template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
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
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			frame_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p class=a>${_text_mark($scope2_id, "a", input.label + ":0")}</p>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0");
				_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 1) && ">>g");
				_subscribe($a__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id, 0) });
			_patch_child_end();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			frame_default({ content: _content("a5", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p class=b>${_text_mark($scope3_id, "a", b)} ${_text_mark($scope3_id, "b", input.label + ":0", 2)}</p>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a3");
				_patch_render($scope3_id, "a4", _filled_guard($scope0_reason, 1) && ">>g");
				_subscribe($b__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cj: $wi__input_label && 1
				})));
			}, $scope1_id, 0) });
			_patch_child_end();
			_html("</main>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a6"], $scope0_reason, 0);
	_html(`<button class=a>a</button>${_el_mark($scope0_id, "b")}<button class=b>b</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "a8", "g");
	_scope($scope0_id, {
		g: input.label,
		h: a,
		i: b,
		j: $wi__input_label && $input_label__closures,
		k: $a__closures,
		l: $b__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 1));
}, 1);
