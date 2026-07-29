// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_threads = _serialize_guard($scope0_reason, 1), $sg__input_threads__OR__input_tags = _serialize_guard($scope0_reason, 0), $sg__input_tags = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul class=threads>`);
	_for_of(input.threads, (thread) => {
		const $scope1_id = _scope_id();
		let draft = "";
		let collapsed = false;
		_html(`<li class=thread><h3 class=title>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", thread.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_threads)}</h3><button class=collapse>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", collapsed ? "expand" : "collapse", _state_reason()))}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}<input${_attr_input_value($scope1_id, "#input/3", draft, _resume((_new_draft) => {
			draft = _new_draft;
		}, "__tests__/template.marko_1/valueChange", $scope1_id))} class=draft>${_el_resume($scope1_id, "#input/3")}<ol class=replies>`);
		_region(() => {
			forOf(thread.replies, (reply) => {
				const $scope2_id = _scope_id();
				_html(`<li class=reply>${_escape(reply.text)}${_el_resume($scope2_id, "#text/0", $sg__input_threads)}</li>`);
				$sg__input_threads && writeScope($scope2_id, {}, "__tests__/template.marko", "15:10");
			});
		}, $scope1_id, "#ol/4", "__tests__/template.marko_r0");
		_html(`</ol>${_el_resume($scope1_id, "#ol/4", $sg__input_threads)}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			draft: _seed_fill(_state_reason() && draft),
			collapsed: _seed_fill(_state_reason() && collapsed)
		}, "__tests__/template.marko", "5:4", {
			draft: "6:10",
			collapsed: "7:10"
		});
	}, function(thread) {
		return thread.id;
	}, $scope0_id, "#ul/2", $sg__input_threads, $sg__input_threads, $sg__input_threads__OR__input_tags, "</ul>", 1, "__tests__/template.marko_1_update");
	_html("<ul class=tags>");
	_for_of(input.tags, (tag) => {
		const $scope3_id = _scope_id();
		let starred = false;
		_html(`<li class=tag>${_escape(_hole_value($scope3_id, "PatchHole:#text/0", tag, _persisted_reason()))}${_el_resume($scope3_id, "#text/0", $sg__input_tags)}<button class=star>${_escape(_hole_value($scope3_id, "PatchHole:#text/2", starred ? "★" : "☆", _state_reason()))}${_el_resume($scope3_id, "#text/2")}</button>${_el_resume($scope3_id, "#button/1")}</li>`);
		_script($scope3_id, "__tests__/template.marko_3");
		writeScope($scope3_id, { starred: _seed_fill(_state_reason() && starred) }, "__tests__/template.marko", "24:4", { starred: "25:10" });
	}, 0, $scope0_id, "#ul/3", $sg__input_tags, $sg__input_tags, $sg__input_threads__OR__input_tags, "</ul>", 1, "__tests__/template.marko_3_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"__tests__/template.marko_3_content": ["<li class=tag> <button class=star> </button></li>", "D b D m"],
	"__tests__/template.marko_1_update": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", "E l D l b l"],
	"__tests__/template.marko_1_content": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><input class=draft><ol class=replies></ol></li>", "E l D l b l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>", " Db%l b b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul class=threads></ul><ul class=tags></ul>", " Db%l b b"]
});
