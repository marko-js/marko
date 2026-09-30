// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child</span>");
	_script($scope0_id, "a0", 0);
});

// tags/log-effect.marko
var log_effect_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "c0", 0);
	_scope($scope0_id, { c: input.id });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	log_effect_default({ id: "before" });
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		$Child_withLoadAssets({});
		_try($scope1_id, "c", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter("inner", 3), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			log_effect_default({ id: "placeholder" });
		}, void 0, "b0");
		_await($scope1_id, "d", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 2), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", err.message, $sg__err_message));
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "b1");
	log_effect_default({ id: "after" });
}, 1);
