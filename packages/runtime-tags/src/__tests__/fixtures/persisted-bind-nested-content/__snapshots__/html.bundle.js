// tags/store.marko
_shells({ c: "c !," });
var store_default = _template_persisted("c", (input) => {
	_persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "c0", $scope0_id)
	};
	_patch_value($scope0_id, "c0", last, 1);
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
	a0: "a0;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template),
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", "D%l"), ((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template)),
	a2: "a2 a8!a4;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $store_set__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a3");
	_owned_guard(0, 0) && _patch_write($scope0_id, "h", store, 1);
	_html(`<p>${_text_resume($scope0_id, "c", store.last)}</p>`);
	_set_serialize_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope3);
	frame_default({ content: _content_elide("a1", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(0);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope2);
		frame_default({ content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "b")}`);
					_script($scope3_id, "a4");
					_patch_value($scope3_id, "a0", count, 1);
					_patch_bind($scope3_id, "d", store.set || void 0);
					_subscribe($store_set__closures, _scope($scope3_id, {
						c: count,
						_: _scope_with_id($scope2_id),
						d: store.set || void 0
					}));
					return 0;
				}
			}, $scope2_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"], $scope0_owned, 0);
			_subscribe(_source_if($scope0_reason, 0) && $input_show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$sg__input_show || _resume_branch($scope2_id);
		}, $scope1_id) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		});
	}, $scope0_id) });
	$scope0_reason && _scope($scope0_id, {
		j: store?.set,
		a: _existing_scope($childScope),
		l: $store_set__closures,
		k: $input_show__closures,
		d: _existing_scope($childScope3)
	});
}, 1, () => [store_default, frame_default]);
