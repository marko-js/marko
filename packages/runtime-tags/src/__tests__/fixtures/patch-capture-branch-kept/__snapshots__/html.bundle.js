// tags/list.marko
const $template$2 = "<!><!><!>";
const $setup$3 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0;b%;<!><!><!>"
});
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c0", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/probe.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ d: "d; ;<output></output>" });
var probe_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "d0", 1, $fg__input_get);
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template = "<button>add</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b7"]];
_shells({
	b3: "b3;b%;<!><!><!>",
	b: "b !b7; b%;<button>add</button><!><!>",
	b4: `b4${_shell_marker([["b11"], []], ["a>", $setup$3], ["b>", $setup$2])};${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)("b%c", " b")};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template$2, $template$1)}`,
	b2: "b2,<span>shown</span>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 0), $sg__input_show = _server_guard($scope0_reason, 1), $fg__input_show = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button>add</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $if_content__s__closures = /* @__PURE__ */ new Set();
			const s = input.show;
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xc", s, !$sg__input_show) && _patch_subscribers($scope1_id, "b1", "c");
			_set_scope_reason(2);
			let $item;
			forOf(items, (item) => $item = attrTags($item, { content: _content("b3", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_if(() => {
					if (s) {
						const $scope3_id = _scope_id();
						_html("<span>shown</span>");
						$wi__input_show && _scope($scope3_id, {});
						return 0;
					}
				}, $scope2_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 1);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b5", $cg__input_show);
				_subscribe(_unfilled_if($scope0_reason, 1) && $if_content__s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_show && "b5", $wg__input_show);
				$wg__input_show || _resume_branch($scope2_id);
			}, $scope1_id, 0) }));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			list_default({ item: $item });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			probe_default({ get: _bind_resume(function() {
				return "s:" + s;
			}, "b0", $scope1_id) });
			_patch_child_end();
			$cg__input_show && _patch_render($scope1_id, "b6");
			_scope($scope1_id, {
				c: s,
				_: _scope_with_id($scope0_id),
				j: $wi__input_show && $if_content__s__closures,
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b4"], $scope0_reason, 0);
	_script($scope0_id, "b7");
	$fg__input_show && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b6", "f");
	_patch_fill($scope0_id, "vb8", items, 1);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_on || _unfilled_if($scope0_reason, 1)) && input.show,
		g: items
	}) || $fg__input_show && $ui__input_on && _patch_write($scope0_id, "xf", input.show, !$sg__input_show);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		on: input.on,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
