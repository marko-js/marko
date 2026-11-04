// card-a.marko
_shells({ a: "a;D ;<div class=a> </div>" });
var card_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=a>${_text_mark($scope0_id, "a", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {});
});

// card-b.marko
_shells({ b: "b;D ;<div class=b> </div>" });
var card_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=b>${_text_mark($scope0_id, "a", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	c1: "c1",
	c0: "c0",
	c: "c !c2; D l%b%b%b%;<button class=inc> </button><!><!><!><!><!>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_which = _filled_guard($scope0_reason, 7), $fg__input_user = _filled_guard($scope0_reason, 8), $fg__input_tag = _filled_guard($scope0_reason, 11), $fg__input_cls = _filled_guard($scope0_reason, 12), $fg__input_title = _filled_guard($scope0_reason, 13), $fg__input_none = _filled_guard($scope0_reason, 14), $fg__input_hidden = _filled_guard($scope0_reason, 15), $fg__input_alt = _filled_guard($scope0_reason, 9), $fg__input_user2 = _filled_guard($scope0_reason, 10);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	const Row = { content: _content_resume("c0", ({ user }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_mark($scope1_id, "a", user.name, 1, 4, 0)}</p>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Alt = { content: _content_resume("c1", ({ user }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_mark($scope2_id, "a", user.name, 1, 4, 0)}</i>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "c", input.which ? card_a_default : card_b_default, { user: input.user }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_dynamic_tag($scope0_id, "d", input.alt ? Alt : Row, { user: input.user2 }, 9, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_dynamic_tag($scope0_id, "e", input.tag, {
		class: input.cls,
		title: input.title
	}, 17, 0, 0, _write_guard($scope0_reason, 6), $scope0_reason, 6, 0, 11);
	_dynamic_tag($scope0_id, "f", input.none ? card_a_default : null, { user: input.hidden }, 25, 0, 0, _write_guard($scope0_reason, 5), $scope0_reason, 5);
	_script($scope0_id, "c2");
	_patch_render($scope0_id, "c3", [$fg__input_which && "i", $fg__input_user && "j"], $scope0_reason, 0);
	_patch_render($scope0_id, "c4", [
		$fg__input_tag && "n",
		$fg__input_cls && "o",
		$fg__input_title && "p"
	], $scope0_reason, 6);
	_patch_render($scope0_id, "c5", [$fg__input_none && "r", $fg__input_hidden && "s"], $scope0_reason, 5);
	_patch_render($scope0_id, "c6", [$fg__input_alt && "l", $fg__input_user2 && "m"], $scope0_reason, 1);
	_scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 0)) && input.which,
		j: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 0)) && input.user,
		l: (_unfilled_if($scope0_reason, 10) || _unfilled_if($scope0_reason, 1)) && input.alt,
		m: (_unfilled_if($scope0_reason, 9) || _unfilled_if($scope0_reason, 1)) && input.user2,
		n: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.tag,
		o: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.cls,
		p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 6)) && input.title,
		r: (_unfilled_if($scope0_reason, 15) || _unfilled_if($scope0_reason, 5)) && input.none,
		s: (_unfilled_if($scope0_reason, 14) || _unfilled_if($scope0_reason, 5)) && input.hidden,
		u: n,
		v: _unfilled_if($scope0_reason, 1) && Row,
		w: _unfilled_if($scope0_reason, 1) && Alt
	}) || ($fg__input_which && _unfilled_if($scope0_reason, 8) && _patch_write($scope0_id, "xi", input.which, !_server_guard($scope0_reason, 7)), $fg__input_user && _unfilled_if($scope0_reason, 7) && _patch_write($scope0_id, "xj", input.user, !_server_guard($scope0_reason, 8)), $fg__input_alt && _unfilled_if($scope0_reason, 10) && _patch_write($scope0_id, "xl", input.alt, !_server_guard($scope0_reason, 9)), $fg__input_user2 && _unfilled_if($scope0_reason, 9) && _patch_write($scope0_id, "xm", input.user2, !_server_guard($scope0_reason, 10)), $fg__input_tag && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xn", input.tag, !_server_guard($scope0_reason, 11)), $fg__input_cls && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xo", input.cls, !_server_guard($scope0_reason, 12)), $fg__input_title && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xp", input.title, !_server_guard($scope0_reason, 13)), $fg__input_none && _unfilled_if($scope0_reason, 15) && _patch_write($scope0_id, "xr", input.none, !_server_guard($scope0_reason, 14)), $fg__input_hidden && _unfilled_if($scope0_reason, 14) && _patch_write($scope0_id, "xs", input.hidden, !_server_guard($scope0_reason, 15)));
}, 1);
