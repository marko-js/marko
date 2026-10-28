// tags/store.marko
var store_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	return {
		last,
		set: _resume(function(next) {
			last = next;
		}, "b0", $scope0_id)
	};
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	forOf(["x", "y"], (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = /* @__PURE__ */ new Set();
		const $childScope = _peek_scope_id();
		let store = store_default({});
		_var($scope1_id, "b", $childScope, "a0");
		const uid = _id();
		_html(`<label${_attr("for", uid)}>${_escape(name)}</label><input${_attr("id", uid)}><p>${_escape(name)}:${_text_resume($scope1_id, "g", store.last, 2)}</p>`);
		forOf(["y", "x"], (other) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show && other === name) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "b")}`);
					_script($scope3_id, "a1");
					_subscribe($for_content__store_set__closures, _scope($scope3_id, {
						c: count,
						_: _scope_with_id($scope2_id),
						d: store.set || void 0
					}));
					return 0;
				}
			}, $scope2_id, "a", $wg__input_show, $wg__input_show);
			_subscribe($wi__input_show && $input_show__closures, _scope($scope2_id, {
				c: $wi__input_show && other,
				_: _scope_with_id($scope1_id)
			}), "a2", $wg__input_show);
		});
		_scope($scope1_id, {
			j: $wi__input_show && name,
			m: $wi__input_show && store?.set,
			_: $wi__input_show && _scope_with_id($scope0_id),
			a: _existing_scope($childScope),
			p: $for_content__store_set__closures
		});
	});
	$wi__input_show && _scope($scope0_id, { e: $input_show__closures });
}, 1);
