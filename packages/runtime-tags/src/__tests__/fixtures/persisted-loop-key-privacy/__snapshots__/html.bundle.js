// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_users = _serialize_guard($scope0_reason, 1), $sg__input_users__OR__input_tags = _serialize_guard($scope0_reason, 0), $sg__input_tags = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=users>`);
	_for_of(input.users, (user) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<li class=user><span class=name>${_escape(_hole_value($scope1_id, "Qa", user.name, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_users)}</span><button class=toggle>${_escape(_hole_value($scope1_id, "Qc", "more", _state_reason()))}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}</li>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { g: _seed_fill(_state_reason() && open) });
	}, function(user) {
		return user.email;
	}, $scope0_id, "c", $sg__input_users, $sg__input_users, $sg__input_users__OR__input_tags, "</ul>", 1, "a2");
	_html("<ul class=tags>");
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		let starred = false;
		_html(`<li class=tag>${_escape(_hole_value($scope2_id, "Qa", tag, _persisted_reason()))}${_el_resume($scope2_id, "a", $sg__input_tags)}<button class=star>${_escape(_hole_value($scope2_id, "Qc", "☆", _state_reason()))}${_el_resume($scope2_id, "c")}</button>${_el_resume($scope2_id, "b")}</li>`);
		_script($scope2_id, "a3");
		writeScope($scope2_id, { f: _seed_fill(_state_reason() && starred) });
	}, 0, $scope0_id, "d", $sg__input_tags, $sg__input_tags, $sg__input_users__OR__input_tags, "</ul>", 1, "a4");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { i: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"a6": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"a2": ["<li class=user><span class=name> </span><button class=toggle> </button></li>", "E l D m"],
	"a7": ["<li class=user><span class=name> </span><button class=toggle> </button></li>", "E l D m"],
	"a0": ["<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>", " Db%l b b"],
	"a": ["<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>", " Db%l b b"]
});
