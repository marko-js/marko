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
		log_effect_default({ id: "a" });
		_await($scope1_id, "#text/1", resolveAfter("b", 1), (first) => {
			const $scope3_id = _scope_id();
			log_effect_default({ id: first });
			_await($scope3_id, "#text/1", resolveAfter("c", 2), (second) => {
				const $scope4_id = _scope_id();
				log_effect_default({ id: second });
			}, 0);
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", err.message, $wg__err_message));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/child.marko", "11:4");
	}, void 0, "__tests__/child.marko_2*content");
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	$Child_withLoadAssets({});
}, 1);
