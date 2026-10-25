// tags/log-effect.marko
var log_effect_default = _template("__tests__/tags/log-effect.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/log-effect.marko_0_input_id#2", 0);
	_scope($scope0_id, { input_id: input.id }, "__tests__/tags/log-effect.marko", 0, { input_id: ["input.id"] });
});

// grand-child.marko
var grand_child_default = _template("__tests__/grand-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	log_effect_default({ id: "grand-child" });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, flush$1, "ready:__tests__/grand-child.marko");
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	log_effect_default({ id: "child" });
	$GrandChild_withLoadAssets({});
	log_effect_default({ id: "child-after" });
});

// awaiter.marko
var awaiter_default = _template("__tests__/awaiter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	log_effect_default({ id: "before-await" });
	_await($scope0_id, "#text/1", resolveAfter("in-await", 1), (v) => {
		const $scope1_id = _scope_id();
		log_effect_default({ id: v });
	}, 0);
	log_effect_default({ id: "after-await" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "ready:__tests__/child.marko");
const $Awaiter_withLoadAssets = withLoadAssets(awaiter_default, flush$1, "ready:__tests__/awaiter.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=log></div>");
	log_effect_default({ id: "page" });
	$Child_withLoadAssets({});
	log_effect_default({ id: "page-after" });
	$Awaiter_withLoadAssets({});
}, 1);
