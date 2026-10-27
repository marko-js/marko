// tags/card.marko
const $template = "<div> </div>";
const $setup = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "a", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template),
	a2: "a2",
	a3: "a3;D ;<p> </p>",
	a4: "a4;D ;<p> </p>",
	a5: "a5 a24",
	a6: /*@__PURE__*/ ((_w0) => `a6${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template),
	a7: "a7;b%;<!><!><!>",
	a: "a !a15; D l%b%b%;<button class=inc> </button><!><!><!><p>end</p>",
	a8: "a8;D ;<p> </p>",
	a9: "a9;b%;<!><!><!>",
	a10: "a10;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_card = _client_guard($scope0_reason, 5), $wi__input_show__OR__input_card = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_tag__OR__input_boxed = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_card__closures = /* @__PURE__ */ new Set();
	const $input_boxed__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.user, (user) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_patch_text($scope5_id, "a", user.name, void 0, $scope0_reason, 4)}</p>`);
				$scope0_page && _scope($scope5_id, {});
			}, 1, "a3");
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a11");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, void 0, void 0, void 0, ["a9"], $scope0_reason, 3);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_try($scope2_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.card, (user) => {
					const $scope7_id = _scope_id();
					_set_scope_reason(_mask_group($scope0_reason, 5) << 1);
					const $childScope = _patch_child($scope7_id, "a");
					card_default({ user });
					$scope0_page && _scope($scope7_id, { a: _existing_scope($childScope) });
				}, 1, "a1");
				_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, $cg__input_card ? "a12" : "a13");
				$scope0_page && $wi__input_show__OR__input_card && _subscribe(_unfilled_if($scope0_reason, 5) && $input_card__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_card && "a13", 0);
				$wi__input_show__OR__input_card && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				_scope_id();
				_html("<b>failed</b>");
			}, void 0, "a2", "a7", void 0, void 0, 1);
			$scope0_page && $wi__input_show__OR__input_card && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", 1, $wg__input_show, void 0, void 0, void 0, ["a10"], $scope0_reason, 3);
	_dynamic_tag($scope0_id, "e", input.tag, { class: "box" }, _content_resume("a5", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		const $scope4_page = _page_render();
		_await($scope4_id, "a", input.boxed, (user) => {
			const $scope8_id = _scope_id();
			_html(`<p>${_patch_text($scope8_id, "a", user.name, void 0, $scope0_reason, 7)}</p>`);
			$scope4_page && _scope($scope8_id, {});
		}, 1, "a0");
		_client_guard($scope0_reason, 7) && _patch_init($scope4_id, "a14");
		$scope4_page && $wi__input_tag__OR__input_boxed && _subscribe(_unfilled_if($scope0_reason, 7) && $input_boxed__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }));
		$wi__input_tag__OR__input_boxed && _resume_branch($scope4_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ l: input.boxed }] : []), 0, _write_guard($scope0_reason, 6), void 0, 1, $scope0_reason, 6);
	_html("<p>end</p>");
	_script($scope0_id, "a15");
	$scope0_page ? _scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.user,
		j: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.card,
		l: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 7)) && input.boxed,
		m: n,
		o: _write_if($scope0_reason, 5) && _unfilled_if($scope0_reason, 5) && $input_card__closures,
		p: _write_if($scope0_reason, 7) && $input_boxed__closures
	}) : (_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va16", input.user, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "va17", input.card, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 7) && _content_withheld("a5", $scope0_id) && _patch_fill($scope0_id, "va18", input.boxed, !_server_guard($scope0_reason, 7)));
}, 1);
