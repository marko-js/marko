// card-a.marko
_shells({ a: "a;D ;<div class=a> </div>" });
var card_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=a>${_patch_text($scope0_id, "a", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {});
});

// card-b.marko
_shells({ b: "b;D ;<div class=b> </div>" });
var card_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=b>${_patch_text($scope0_id, "a", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	c0: "c0,",
	c1: "c1,",
	c: "c !c2; D l%b%b%b%;<button class=inc> </button><!><!><!><!><!>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	const Row = { content: _content_resume("c1", ({ user }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_patch_text($scope1_id, "a", user.name)}</p>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Alt = { content: _content_resume("c0", ({ user }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_patch_text($scope2_id, "a", user.name)}</i>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "c", input.which ? card_a_default : card_b_default, { user: input.user }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_dynamic_tag($scope0_id, "d", input.alt ? Alt : Row, { user: input.user2 }, 0, 0, _write_guard($scope0_reason, 1), void 0, 1, $scope0_reason, 1);
	_dynamic_tag($scope0_id, "e", input.tag, {
		class: input.cls,
		title: input.title
	}, 0, 0, _write_guard($scope0_reason, 6), void 0, 1, $scope0_reason, 6);
	_dynamic_tag($scope0_id, "f", input.none ? card_a_default : null, { user: input.hidden }, 0, 0, _write_guard($scope0_reason, 5), void 0, 1, $scope0_reason, 5);
	_script($scope0_id, "c2");
	_patch_write($scope0_id, "wi", input.which, 1);
	_patch_write($scope0_id, "wj", input.user, 1);
	_patch_write($scope0_id, "wl", input.alt, 1);
	_patch_write($scope0_id, "wm", input.user2, 1);
	_patch_write($scope0_id, "wn", input.tag, 1);
	_patch_write($scope0_id, "wo", input.cls, 1);
	_patch_write($scope0_id, "wp", input.title, 1);
	_patch_write($scope0_id, "wr", input.none, 1);
	_patch_write($scope0_id, "ws", input.hidden, 1);
	_patch_write($scope0_id, "wv", Row, 1);
	_patch_write($scope0_id, "ww", Alt, 1);
	_patch_value($scope0_id, "vc3", n, 1);
	$scope0_page && _scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 0)) && input.which,
		j: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 0)) && input.user,
		l: (_unfilled_if($scope0_reason, 10) || _unfilled_if($scope0_reason, 1)) && input.alt,
		m: (_unfilled_if($scope0_reason, 9) || _unfilled_if($scope0_reason, 1)) && input.user2,
		n: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.tag,
		o: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.cls,
		p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 6)) && input.title,
		r: (_unfilled_if($scope0_reason, 12) || _unfilled_if($scope0_reason, 5)) && input.none,
		s: (_unfilled_if($scope0_reason, 11) || _unfilled_if($scope0_reason, 5)) && input.hidden,
		u: n,
		v: _unfilled_if($scope0_reason, 1) && Row,
		w: _unfilled_if($scope0_reason, 1) && Alt
	});
}, 1);
