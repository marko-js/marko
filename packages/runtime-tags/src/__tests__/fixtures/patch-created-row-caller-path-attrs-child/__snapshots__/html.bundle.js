// tags/icon.marko
const $template$1 = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<svg viewBox=\"0 0 1 1\"><title></title></svg>" });
var icon_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_escape(input.name, $scope0_id, "ma", $scope0_reason, 0)}</title>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}</svg>`);
	_scope($scope0_id, {});
});

// tags/navx.marko
const $template = "<nav></nav><main></main>";
const $walks = " b b";
const $setup = [[], []];
_shells({
	c: "c; b ;<nav></nav><main></main>",
	c1: `c1${_shell_marker([[], []], ["b>", $setup$1])};${/*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l")};${/*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template$1)}`,
	c2: "c2;D ;<p> </p>"
});
var navx_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 3), $fg__input_path = _filled_guard($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_write($scope1_id, "xf", item?.href, !_server_guard($scope0_reason, 1));
		const active = item.href === input.path;
		_html(`<a${_attr_class(["link", { active }], $scope1_id, "a", $scope0_reason, 0)}${_attr("href", item.href, $scope1_id, "a", $scope0_reason, 1)}>`);
		_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		icon_default({ name: item.icon });
		_patch_child_end();
		_html(`<span>${_text_mark($scope1_id, "c", item.label, 1, $scope0_reason, 1)}</span></a>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 0) || _updates_from($scope0_reason, 1))}`);
		_patch_render($scope1_id, "c0", [_filled_guard($scope0_reason, 2) && ">f", _filled_guard($scope0_reason, 1) && "f"], $scope0_reason, 0);
		_scope($scope1_id, {
			f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c1", $scope0_reason, 1);
	_html(`</nav>${_el_mark($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "a", input.page, 1, $scope0_reason, 3)}</p>`);
			_client_guard($scope0_reason, 3) && _patch_render($scope2_id, "c3");
			_scope($scope2_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_page, 1, 0, 0, ["c2"], $scope0_reason, 3);
	_html(`</main>${_el_mark($scope0_id, "b", $wg__input_page)}`);
	$fg__input_path && $cg__input_items && _patch_render($scope0_id, "c4", "f");
	_scope($scope0_id, { f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.path }) || $fg__input_path && $cg__input_items && _patch_write($scope0_id, "xf", input.path, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button class=p>p</button>",
	a2: `a2${_shell_marker([["a5"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 1), $fg__input_page = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let path = "/a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | (_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 7));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			navx_default({
				items: input.items,
				path,
				page: input.page
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_html(`<button class=p>p</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "a0", "f");
	$fg__input_page && $cg__input_show && _patch_render($scope0_id, "a1", "g");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.page,
		h: path
	}) || ($fg__input_items && $cg__input_show && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 1)), $fg__input_page && $cg__input_show && _patch_write($scope0_id, "xg", input.page, !_server_guard($scope0_reason, 2)));
}, 1);
