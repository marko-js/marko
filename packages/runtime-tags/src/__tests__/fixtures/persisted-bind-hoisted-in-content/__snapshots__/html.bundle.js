// tags/store.marko
const $template$1 = "<p> </p>";
_shells({ c: "c !;D ;<p> </p>" });
var store_default = _template_persisted("c", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<p>${_text_resume($scope0_id, "a", last)}</p>`);
	const $return = _resume((next) => {
		last = next;
	}, "c0", $scope0_id);
	_patch_value($scope0_id, "c0", last, 1);
	$scope0_reason && _scope($scope0_id, {});
	return $return;
}, 0, 0);

// tags/frame.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l"), $template$1),
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&%c`)("D%l"), ((_w0) => `${_w0}<!><!>`)($template)),
	a1: "a1 !a4;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $setLast_getter = _hoist($scope0_id, "a2");
	const $frame_content__subscribers = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	frame_default({ content: _content_elide("a0", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		let setLast = store_default({});
		_var($scope1_id, "b", $childScope, "a3");
		_owned_guard(0, 0) && _patch_write($scope1_id, "c", setLast, 1);
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
			_script($scope2_id, "a4");
			_patch_value($scope2_id, "a0", count, 1);
			_patch_bind($scope2_id, "d", $setLast_getter || void 0);
			_scope($scope2_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $setLast_getter || void 0
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {
		B1: $frame_content__subscribers,
		a: _existing_scope($childScope2)
	});
}, 1, () => [store_default, frame_default]);
