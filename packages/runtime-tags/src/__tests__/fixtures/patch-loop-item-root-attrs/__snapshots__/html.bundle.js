// tags/icon.marko
const $template = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $setup = [[], []];
_shells({ b: "b;D ;<svg viewBox=\"0 0 1 1\"><title></title></svg>" });
var icon_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_escape(input.name, $scope0_id, "ma", $scope0_reason, 0)}</title>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}</svg>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a; b ;<nav></nav><main></main>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l")};${/*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template)}`)(),
	a2: "a2;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 3), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xf", item?.href, !_server_guard($scope0_reason, 1));
		const active = item.href === input.path;
		_html(`<a${_attr_class(["link", { active }], $scope1_id, "aa$class", $scope0_reason, 0)}${_attr("href", item.href, $scope1_id, "aa$href", $scope0_reason, 1)}>`);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		icon_default({ name: item.icon });
		_patch_child_end();
		_html(`<span>${_text_resume($scope1_id, "c", item.label, 1, $scope0_reason, 1)}</span></a>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 1))}`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "a0", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">f", _filled_guard($scope0_reason, 1) && "f");
		_scope($scope1_id, {
			f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 1);
	_html(`</nav>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", input.page, 1, $scope0_reason, 3)}</p>`);
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a3");
			_scope($scope2_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_page, 1, 0, 0, ["a2"], $scope0_reason, 3);
	_html(`</main>${_el_resume($scope0_id, "b", $wg__input_page)}`);
	_filled_guard($scope0_reason, 2) && $cg__input_items && _patch_fill($scope0_id, "va4", input.path);
	_scope($scope0_id, { f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.path });
}, 1);
