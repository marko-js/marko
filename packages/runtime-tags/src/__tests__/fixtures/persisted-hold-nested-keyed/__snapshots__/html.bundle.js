// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_threads = _serialize_guard($scope0_reason, 1), $sg__input_threads__OR__input_tags = _serialize_guard($scope0_reason, 0), $sg__input_tags = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=threads>`);
	_for_of(input.threads, (thread) => {
		const $scope1_id = _scope_id();
		let draft = "";
		let collapsed = false;
		_html(`<li class=thread><h3 class=title>${_escape(_hole_value($scope1_id, "Qa", thread.title, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_threads)}</h3><button class=collapse>${_escape(_hole_value($scope1_id, "Qc", "collapse", _state_reason()))}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}<input${_attr_input_value($scope1_id, "d", draft, _resume((_new_draft) => {
			draft = _new_draft;
		}, "a0", $scope1_id))} class=draft>${_el_resume($scope1_id, "d")}<ol class=replies>`);
		_region(() => {
			forOf(thread.replies, (reply) => {
				const $scope2_id = _scope_id();
				_html(`<li class=reply>${_escape(reply.text)}${_el_resume($scope2_id, "a", $sg__input_threads)}</li>`);
				$sg__input_threads && writeScope($scope2_id, {});
			});
		}, $scope1_id, "e", "a2");
		_html(`</ol>${_el_resume($scope1_id, "e", $sg__input_threads)}</li>`);
		_script($scope1_id, "a3");
		writeScope($scope1_id, {
			j: _seed_fill(_state_reason() && draft),
			k: _seed_fill(_state_reason() && collapsed)
		});
	}, function(thread) {
		return thread.id;
	}, $scope0_id, "c", $sg__input_threads, $sg__input_threads, $sg__input_threads__OR__input_tags, "</ul>", 1, "a4");
	_html("<ul class=tags>");
	_for_of(input.tags, (tag) => {
		const $scope3_id = _scope_id();
		let starred = false;
		_html(`<li class=tag>${_escape(_hole_value($scope3_id, "Qa", tag, _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_tags)}<button class=star>${_escape(_hole_value($scope3_id, "Qc", "☆", _state_reason()))}${_el_resume($scope3_id, "c")}</button>${_el_resume($scope3_id, "b")}</li>`);
		_script($scope3_id, "a5");
		writeScope($scope3_id, { f: _seed_fill(_state_reason() && starred) });
	}, 0, $scope0_id, "d", $sg__input_tags, $sg__input_tags, $sg__input_threads__OR__input_tags, "</ul>", 1, "a6");
	_script($scope0_id, "a7");
	writeScope($scope0_id, { i: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a6": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"a8": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"a4": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", "E l D l b l"],
	"a9": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", "E l D l b l"],
	"a1": ["<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>", " Db%l b b"],
	"a": ["<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>", " Db%l b b"]
});
