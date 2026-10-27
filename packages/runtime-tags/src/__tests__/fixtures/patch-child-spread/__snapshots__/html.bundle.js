// tags/card.marko
const $template = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks = "E lD l D m";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;E lD l D ;<div class=card><h2> </h2><p> </p><button class=t> </button></div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2><p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_reason, 1)}</p><button class=t>${_text_resume($scope0_id, "d", "show")}</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", open, 1);
	$scope0_page && _scope($scope0_id, { i: open });
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&%b D m`)($walks)};${((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template)}`)(),
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	card_default(input.props);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope1_id, "a");
			card_default({
				title: "fixed",
				...input.more
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button id=c>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.more,
		j: count,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.more, !_server_guard($scope0_reason, 1));
}, 1);
