// tags/list.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;b%;<!><!><!>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/probe.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko; ;<output></output>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_get#3", 1, $fg__input_get, "get");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/probe.marko", 0, { get: "1:10" }) || $fg__input_get && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template$1 = "<button>add</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0; b%;<button>add</button><!><!>",
	"__tests__/tags/child.marko_1*shell": `__tests__/tags/child.marko_1*shell${_shell_marker([["__tests__/tags/child.marko_1_items#0:6/setup"], []], ["#childScope/0>", $setup$3], ["#childScope/1>", $setup$2])};${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)("b%c", " b")};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template$3, $template$2)}`,
	"__tests__/tags/child.marko_3*shell": "__tests__/tags/child.marko_3*shell,<span>shown</span>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $sg__input_show = _server_guard($scope0_reason, 1), $fg__input_show = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button>add</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $if_content__s__closures = new Set();
			const s = input.show;
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:s", s, !$sg__input_show);
			_set_scope_reason(2);
			let $item;
			forOf(items, (item) => {
				$item = attrTags($item, { content: _content("__tests__/tags/child.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (s) {
							const $scope3_id = _scope_id();
							_html("<span>shown</span>");
							$wi__input_show && _scope($scope3_id, {}, "__tests__/tags/child.marko", "7:15");
							return 0;
						}
					}, $scope2_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_3*shell"], $scope0_reason, 1);
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/child.marko_2_s#1:2/subscribe", $cg__input_show);
					_subscribe(_unfilled_if($scope0_reason, 1) && $if_content__s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "7:8"), $cg__input_show && "__tests__/tags/child.marko_2_s#1:2/subscribe", $wg__input_show);
					$wg__input_show || _resume_branch($scope2_id);
				}, $scope1_id, 0) });
			});
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			list_default({ item: $item });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			probe_default({ get: _bind_resume(function() {
				return "s:" + s;
			}, "__tests__/tags/child.marko_1/get", $scope1_id) });
			_patch_child_end();
			_filled_guard($scope0_reason, 1) && _patch_subscribers($scope1_id, "__tests__/tags/child.marko_1_s#2/subscribers", "s");
			$cg__input_show && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_show#0:5/setup");
			_scope($scope1_id, {
				s,
				_: _scope_with_id($scope0_id),
				"ClosureScopes:s/9": $wi__input_show && $if_content__s__closures,
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/tags/child.marko", "3:2", { s: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	$fg__input_show && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_show#0:5/setup", "input_show");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_0_items#6/fill", items, 1);
	_scope($scope0_id, {
		input_show: _write_if($scope0_reason, 0) && input.show,
		items
	}, "__tests__/tags/child.marko", 0, {
		input_show: ["input.show"],
		items: "1:6"
	}) || $fg__input_show && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !$sg__input_show);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		on: input.on,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
