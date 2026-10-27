// tags/store.marko
_shells({ c: "c;D ;<p> </p>" });
var store_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<p>${_patch_text($scope0_id, "a", last, void 0, 0, 0, 1)}</p>`);
	const $return = _resume((next) => {
		last = next;
	}, "c0", $scope0_id);
	_scope($scope0_id, {});
	return $return;
});

// tags/frame.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)("D%l")};${((_w0) => `${_w0}<!><!>`)($template)}`)(),
	a4: "a4 !a2;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $setLast_getter = _hoist($scope0_id, "a0");
	const $frame_content__subscribers = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a", 1);
	frame_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _patch_child($scope1_id, "a", 0);
		let setLast = store_default({});
		_patch_child_end();
		_subscribe($frame_content__subscribers, _scope($scope1_id, {
			c: setLast,
			a: _existing_scope($childScope)
		}));
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope2_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a2");
			const $countChange = $setLast_getter || void 0;
			_patch_let_change($scope2_id, "va3", count, "wd", $countChange);
			_scope($scope2_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {
		B1: $frame_content__subscribers,
		a: _existing_scope($childScope2)
	});
}, 1);
