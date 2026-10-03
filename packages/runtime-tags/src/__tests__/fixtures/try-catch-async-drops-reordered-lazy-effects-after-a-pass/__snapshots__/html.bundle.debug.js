// tags/log-effect.marko
var log_effect_default = _template("__tests__/tags/log-effect.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/log-effect.marko_0_input_id#2", 0);
	_scope($scope0_id, { input_id: input.id }, "__tests__/tags/log-effect.marko", 0, { input_id: ["input.id"] });
});

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter("inner", 4), (v) => {
				const $scope5_id = _scope_id();
				_html(_escape(v));
			}, 0);
			log_effect_default({ id: "reordered" });
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("loading");
		}, void 0, "__tests__/child.marko_4*content");
		_await($scope1_id, "#text/1", resolveAfter("mid", 1), (v) => {
			const $scope6_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_await($scope1_id, "#text/2", rejectAfter(new Error("ERROR!"), 2), (v) => {
			const $scope7_id = _scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", err.message, $wg__err_message));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/child.marko", "17:4");
	}, void 0, "__tests__/child.marko_2*content");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	log_effect_default({ id: "before" });
	$Child_withLoadAssets({});
	log_effect_default({ id: "after" });
}, 1);
