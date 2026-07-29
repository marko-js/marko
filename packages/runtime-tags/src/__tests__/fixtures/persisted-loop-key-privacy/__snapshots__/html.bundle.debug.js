// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_users = _serialize_guard($scope0_reason, 1), $sg__input_users__OR__input_tags = _serialize_guard($scope0_reason, 0), $sg__input_tags = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul class=users>`);
	_for_of(input.users, (user) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<li class=user><span class=name>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", user.name, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_users)}</span><button class=toggle>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", open ? "less" : "more", _state_reason()))}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { open: _seed_fill(_state_reason() && open) }, "__tests__/template.marko", "5:4", { open: "6:10" });
	}, function(user) {
		return user.email;
	}, $scope0_id, "#ul/2", $sg__input_users, $sg__input_users, $sg__input_users__OR__input_tags, "</ul>", 1, "__tests__/template.marko_1_update");
	_html("<ul class=tags>");
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		let starred = false;
		_html(`<li class=tag>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", tag, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", $sg__input_tags)}<button class=star>${_escape(_hole_value($scope2_id, "PatchHole:#text/2", starred ? "★" : "☆", _state_reason()))}${_el_resume($scope2_id, "#text/2")}</button>${_el_resume($scope2_id, "#button/1")}</li>`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, { starred: _seed_fill(_state_reason() && starred) }, "__tests__/template.marko", "15:4", { starred: "16:10" });
	}, 0, $scope0_id, "#ul/3", $sg__input_tags, $sg__input_tags, $sg__input_users__OR__input_tags, "</ul>", 1, "__tests__/template.marko_2_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"__tests__/template.marko_2_content": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"__tests__/template.marko_1_update": ["<li class=user><span class=name> </span><button class=toggle> </button></li>", "E l D m"],
	"__tests__/template.marko_1_content": ["<li class=user><span class=name> </span><button class=toggle> </button></li>", "E l D m"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>", " Db%l b b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>", " Db%l b b"]
});
