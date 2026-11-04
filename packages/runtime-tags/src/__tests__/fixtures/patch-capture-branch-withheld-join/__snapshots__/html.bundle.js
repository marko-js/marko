// tags/reader.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ c: "c; ;<output></output>" });
var reader_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0", 1, $fg__input_get, "d");
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1",
	b: "b;b%;<!><!><!>",
	b8: `b8${_shell_marker([[], []], ["b>", $setup$2])};${/*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b")};${/*@__PURE__*/ ((_w0) => `<section></section>${_w0}`)($template$1)}`
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 3), $sg__input_b = _server_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_mode = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = /* @__PURE__ */ new Set();
			const c = input.b + "!";
			_filled_guard($scope0_reason, 4) && _patch_write($scope1_id, "xc", c, !$sg__input_b);
			const frag = { content: _content_resume("b1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_mark($scope2_id, "a", input.a + c, 1, $scope0_reason, 0)}</em><i>${_text_mark($scope2_id, "b", c, 1, $scope0_reason, 4)}</i>`);
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "b2");
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "b3", $cg__input_b);
				_patch_render($scope2_id, "b4", [_filled_guard($scope0_reason, 5) && ">>f", _filled_guard($scope0_reason, 4) && ">c"], $scope0_reason, 0);
				_subscribe(_unfilled_if($scope0_reason, 4) && $if_content__c__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope1_id) })));
			}, $scope1_id) };
			_html("<section>");
			_attr_content("a", $scope1_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 6);
			_html(`</section>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 6))}`);
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 1);
			reader_default({ get: _bind_resume(function() {
				return c;
			}, "b0", $scope1_id) });
			_patch_child_end();
			_unfilled_if($scope0_reason, 6) && _patch_write($scope1_id, "we", frag?.content, 1);
			_filled_guard($scope0_reason, 4) && _patch_subscribers($scope1_id, "b5", "c");
			$cg__input_b && _patch_render($scope1_id, "b6");
			_client_guard($scope0_reason, 6) && _patch_render($scope1_id, "b7");
			_scope($scope1_id, {
				c,
				e: _unfilled_if($scope0_reason, 6) && frag?.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				k: _write_if($scope0_reason, 4) && $if_content__c__closures,
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b8"], $scope0_reason, 3);
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "b6", "e");
	$fg__input_a && _patch_subscribers($scope0_id, "b9", "f");
	$fg__input_mode && $cg__input_show && _patch_render($scope0_id, "b10", "g");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 3) && input.b,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.mode,
		i: _write_if($scope0_reason, 5) && $input_a__closures
	}) || ($fg__input_b && $cg__input_show && _patch_write($scope0_id, "xe", input.b, !$sg__input_b), $fg__input_a && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 5)), $fg__input_mode && $cg__input_show && _patch_write($scope0_id, "xg", input.mode, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(10366 | (_updates_from($scope0_reason, 2) << 7 | _updates_from($scope0_reason, 1) << 9));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(8312 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 7 | _updates_from($scope0_reason, 1) << 9 | _updates_from($scope0_reason, 3) << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}<button class=m>m</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: n,
		k: m,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
