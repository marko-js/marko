// tags/card.marko
const $template = "<div> </div>";
const $setup = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template}`,
	a2: "a2;D ;<p> </p>",
	a3: "a3;D ;<p> </p>",
	a4: "a4",
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${((_w0) => `/${_w0}&`)("D l")};${$template}`,
	a6: "a6;b%;<!><!><!>",
	a: "a !a14; D l%b%b%;<button class=inc> </button><!><!><!><p>end</p>",
	a7: "a7;D ;<p> </p>",
	a8: "a8;b%;<!><!><!>",
	a9: "a9;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_card = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 3), $scope0_page = _page_render(), $wi__input_tag__OR__input_boxed = _write_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 3), $ui__input_card2 = _unfilled_if($scope0_reason, 5), $wi__input_show = _write_if($scope0_reason, 3), $ui__input_tag = _unfilled_if($scope0_reason, 6), $fg__input_user = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_card = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_card__closures = /* @__PURE__ */ new Set();
	const $input_boxed__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.user, (user) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_text_mark($scope5_id, "a", user.name, 1, $scope0_reason, 4)}</p>`);
				_scope($scope5_id, {});
			}, 1, "a2", _unfilled_if($scope0_reason, 4) && 2);
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "a10");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, 1, 0, 0, ["a8"], $scope0_reason, 3);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_try($scope2_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id(), $ui__input_card = _unfilled_if($scope0_reason, 5);
				_await($scope3_id, "a", input.card, (user) => {
					const $scope7_id = _scope_id();
					_set_scope_reason(_updates_from($scope0_reason, 5) << 1);
					const $childScope = _peek_scope_id($scope7_id, "a", 0);
					card_default({ user });
					_patch_child_end();
					_scope($scope7_id, { a: _existing_scope($childScope) });
				}, 1, "a1", $ui__input_card);
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope3_id, "a11", 1);
				$wi__input_show__OR__input_card && _subscribe($ui__input_card && $input_card__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), _client_guard($scope0_reason, 5) && "a11", 0);
				$wi__input_show__OR__input_card && _resume_branch($scope3_id);
			}, void 0, (err) => {
				_scope_reason();
				_scope_id();
				_html("<b>failed</b>");
			}, 0, "a12", "a6");
			$wi__input_show__OR__input_card && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d", 1, $wg__input_show, 1, 0, 0, ["a9"], $scope0_reason, 3);
	_dynamic_tag($scope0_id, "e", input.tag, { class: "box" }, 9, _content_resume("a4", () => {
		const $scope4_id = _scope_id(), $ui__input_boxed = _unfilled_if($scope0_reason, 7);
		_scope_reason();
		_await($scope4_id, "a", input.boxed, (user) => {
			const $scope8_id = _scope_id();
			_html(`<p>${_text_mark($scope8_id, "a", user.name, 1, $scope0_reason, 7)}</p>`);
			_scope($scope8_id, {});
		}, 1, "a0", $ui__input_boxed && 2);
		_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope4_id, "a13", 1);
		$wi__input_tag__OR__input_boxed && _subscribe($ui__input_boxed && $input_boxed__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 7) && "a13", 0);
		$wi__input_tag__OR__input_boxed && _resume_branch($scope4_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ l: input.boxed }] : []), 0, _write_guard($scope0_reason, 6), $scope0_reason, 6, 0, void 0, 0, 0, "a4");
	_html("<p>end</p>");
	_script($scope0_id, "a14");
	$fg__input_user && $cg__input_show && _patch_render($scope0_id, "a10", "i");
	_scope($scope0_id, {
		i: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 4)) && input.user,
		j: $wi__input_show && ($ui__input_show || $ui__input_card2) && input.card,
		l: _write_if($scope0_reason, 6) && ($ui__input_tag || _unfilled_if($scope0_reason, 7)) && input.boxed,
		m: n,
		o: $wi__input_card && $wi__input_card && ($ui__input_card2 || $ui__input_show) && $input_card__closures,
		p: _write_if($scope0_reason, 7) && $input_boxed__closures
	}) || ($fg__input_user && $ui__input_show && _patch_write($scope0_id, "xi", input.user, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $ui__input_show && _patch_write($scope0_id, "xj", input.card, !_server_guard($scope0_reason, 5)) && $cg__input_show && _patch_subscribers($scope0_id, "a15", "j"), _filled_guard($scope0_reason, 7) && (_client_branch_if("a4", $scope0_id) || $ui__input_tag) && _patch_write($scope0_id, "xl", input.boxed, !_server_guard($scope0_reason, 7)) && _patch_subscribers($scope0_id, "a16", "l"));
}, 1);
