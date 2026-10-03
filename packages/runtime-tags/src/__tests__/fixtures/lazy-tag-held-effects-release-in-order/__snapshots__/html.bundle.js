// tags/log-effect.marko
var log_effect_default = _template("e", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "e0", 0);
	_scope($scope0_id, { c: input.id });
});

// grand-child.marko
var grand_child_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	log_effect_default({ id: "grand-child" });
});

// child.marko
const $GrandChild_withLoadAssets = withLoadAssets(grand_child_default, "_c");
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	log_effect_default({ id: "child" });
	$GrandChild_withLoadAssets({});
	log_effect_default({ id: "child-after" });
});

// awaiter.marko
var awaiter_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	log_effect_default({ id: "before-await" });
	_await($scope0_id, "b", resolveAfter("in-await", 1), (v) => {
		_scope_id();
		log_effect_default({ id: v });
	}, 0);
	log_effect_default({ id: "after-await" });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_b");
const $Awaiter_withLoadAssets = withLoadAssets(awaiter_default, "_a");
var template_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	_html("<div id=log></div>");
	log_effect_default({ id: "page" });
	$Child_withLoadAssets({});
	log_effect_default({ id: "page-after" });
	$Awaiter_withLoadAssets({});
}, 1);
