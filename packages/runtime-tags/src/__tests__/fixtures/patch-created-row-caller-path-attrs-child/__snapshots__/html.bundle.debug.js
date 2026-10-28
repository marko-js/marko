// tags/icon.marko
const $template$2 = "<svg viewBox=\"0 0 1 1\"><title></title></svg>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/icon.marko": "__tests__/tags/icon.marko;D ;<svg viewBox=\"0 0 1 1\"><title></title></svg>" });
var icon_default = _template("__tests__/tags/icon.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_escape(input.name, $scope0_id, "PatchTextContent:#title/0", $scope0_reason, 0)}</title>${_el_resume($scope0_id, "#title/0", _mask_group($scope0_reason, 0))}</svg>`);
	_scope($scope0_id, {}, "__tests__/tags/icon.marko", 0);
});

// tags/navx.marko
const $template$1 = "<nav></nav><main></main>";
const $walks$1 = " b b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/navx.marko": "__tests__/tags/navx.marko; b ;<nav></nav><main></main>",
	"__tests__/tags/navx.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/navx.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` D/${_w0}&D m`)("D l")};${/*@__PURE__*/ ((_w0) => `<a class=link>${_w0}<span> </span></a>`)($template$2)}`)(),
	"__tests__/tags/navx.marko_2*shell": "__tests__/tags/navx.marko_2*shell;D ;<p> </p>"
});
var navx_default = _template("__tests__/tags/navx.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 3), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item_href", item?.href, !_server_guard($scope0_reason, 1));
		const active = item.href === input.path;
		_html(`<a${_attr_class(["link", { active }], $scope1_id, "PatchAttr:#a/0 class", $scope0_reason, 0)}${_attr("href", item.href, $scope1_id, "PatchAttr:#a/0 href", $scope0_reason, 1)}>`);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
		icon_default({ name: item.icon });
		_patch_child_end();
		_html(`<span>${_text_resume($scope1_id, "#text/2", item.label, 1, $scope0_reason, 1)}</span></a>${_el_resume($scope1_id, "#a/0", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 1))}`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/navx.marko_1_input_path#0:5_item_href#5/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_path", _filled_guard($scope0_reason, 1) && "item_href");
		_scope($scope1_id, {
			item_href: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item?.href,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/tags/navx.marko", "2:4", { item_href: ["item.href", "2:8"] });
	}, 0, $scope0_id, "#nav/0", 1, 1, 1, 0, 0, "__tests__/tags/navx.marko_1*shell", $scope0_reason, 1);
	_html(`</nav>${_el_resume($scope0_id, "#nav/0")}<main>`);
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.page, 1, $scope0_reason, 3)}</p>`);
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/tags/navx.marko_2_input_page#0:6/init");
			_scope($scope2_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/tags/navx.marko", "10:8");
			return 0;
		}
	}, $scope0_id, "#main/1", 1, $wg__input_page, 1, 0, 0, ["__tests__/tags/navx.marko_2*shell"], $scope0_reason, 3);
	_html(`</main>${_el_resume($scope0_id, "#main/1", $wg__input_page)}`);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/navx.marko_fill0/unpatched", input.path) : $cg__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_path", input.path, 1);
	_scope($scope0_id, { input_path: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.path }, "__tests__/tags/navx.marko", 0, { input_path: ["input.path"] });
});

// template.marko
const $template = "<!><!><button class=p>p</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=p>p</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_path#0:7/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let path = "/a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 7));
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			navx_default({
				items: input.items,
				path,
				page: input.page
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:5/init");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_page#0:6/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_items: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items,
		input_page: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.page,
		path
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_page: ["input.page"],
		path: "1:6"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.page, !_server_guard($scope0_reason, 2)));
}, 1);
