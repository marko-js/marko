// tags/store.marko
const $template$1 = "<p> </p>";
_shells({ c: "c !;D ;<p> </p>" });
var store_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<p>${_text_resume($scope0_id, "a", last)}</p>`);
	const $return = _resume((next) => {
		last = next;
	}, "c0", $scope0_id);
	_patch_value($scope0_id, "vc1", last, 1);
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// tags/frame.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l")};${_w0}`)($template$1),
	a: /*@__PURE__*/ (() => `a;${((_w0) => `/${_w0}&%c`)("D%l")};${((_w0) => `${_w0}<!><!>`)($template)}`)(),
	a1: "a1 !a3;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $setLast_getter = _hoist($scope0_id, "a2");
	const $frame_content__subscribers = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "a");
	frame_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _patch_child($scope1_id, "a");
		let setLast = store_default({});
		_patch_write($scope1_id, "wc", setLast, 1);
		_subscribe($frame_content__subscribers, _scope($scope1_id, {
			c: setLast,
			a: _existing_scope($childScope)
		}));
	}, $scope0_id) });
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope2_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope2_id, "b")}`);
			_script($scope2_id, "a3");
			const $countChange = $setLast_getter || void 0;
			_patch_let_change($scope2_id, "va4", count, "dd", $countChange);
			_scope($scope2_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {
		B1: $frame_content__subscribers,
		a: _existing_scope($childScope2)
	});
}, 1);
