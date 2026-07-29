// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_threads = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ul class=threads>`);
	_for_of(input.threads, (thread) => {
		const $scope1_id = _scope_id();
		const $for_content__thread_note__closures = new Set();
		let collapsed = false;
		_html(`<li class=thread><h3 class=title>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", thread.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_threads | _persisted_reason())}</h3><button class=collapse>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", collapsed ? "expand" : "collapse", _state_reason()))}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}`);
		_if(() => {
			if (!collapsed) {
				_group_site("__tests__/template.marko_2_update");
				const $scope2_id = _scope_id();
				_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_await($scope3_id, "#text/0", resolveAfter(thread.note, 1), (note) => {
						const $scope5_id = _scope_id();
						_html(`<p class=note>${_escape(_hole_value($scope5_id, "PatchHole:#text/0", note, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", $sg__input_threads | _persisted_reason())}</p>`);
						$sg__input_threads | _persisted_reason() && writeScope($scope5_id, {}, "__tests__/template.marko", "17:12");
					}, $sg__input_threads | _persisted_reason(), "__tests__/template.marko_5_update");
					_subscribe($sg__input_threads | _persisted_reason() && $for_content__thread_note__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "15:10"));
					_resume_branch($scope3_id);
				}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
					_scope_reason();
					const $scope4_id = _scope_id();
					_html("<p class=loading>loading…</p>");
				}, $scope2_id) }) }, "__tests__/template.marko_2/update_boundary_#text/0", "__tests__/template.marko_3_update");
				_html("<ol class=replies>");
				_region(() => {
					forOf(thread.replies, (reply) => {
						const $scope6_id = _scope_id();
						_html(`<li class=reply>${_escape(reply.text)}${_el_resume($scope6_id, "#text/0", $sg__input_threads | _persisted_reason())}</li>`);
						$sg__input_threads | _persisted_reason() && writeScope($scope6_id, {}, "__tests__/template.marko", "22:12");
					});
				}, $scope2_id, "#ol/1", "__tests__/template.marko_r0");
				_html(`</ol>${_el_resume($scope2_id, "#ol/1", $sg__input_threads | _persisted_reason())}`);
				writeScope($scope2_id, {}, "__tests__/template.marko", "14:8");
				return 0;
			}
		}, $scope1_id, "#text/3", 1 | _persisted_reason(), 1 | _persisted_reason(), void 0, void 0, void 0, void 0, void 0, ["__tests__/template.marko_2_update"]);
		_html("</li>");
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			thread_note: thread?.note,
			thread_replies: thread?.replies,
			collapsed: _seed_fill(_state_reason() && collapsed),
			"ClosureScopes:thread_note": $sg__input_threads | _persisted_reason() && $for_content__thread_note__closures
		}, "__tests__/template.marko", "7:4", {
			thread_note: ["thread.note", "7:8"],
			thread_replies: ["thread.replies", "7:8"],
			collapsed: "8:10"
		});
	}, function(thread) {
		return thread.id;
	}, $scope0_id, "#ul/2", $sg__input_threads, $sg__input_threads, $sg__input_threads, "</ul>", 1, "__tests__/template.marko_1_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_5_update": ["<p class=note> </p>", "D l"],
	"__tests__/template.marko_5_content": ["<p class=note> </p>", "D l"],
	"__tests__/template.marko_3_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_3_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_update": ["<!><!><ol class=replies></ol>", "b%b b"],
	"__tests__/template.marko_2_content": ["<!><!><ol class=replies></ol>", "b%b b"],
	"__tests__/template.marko_1_update": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", "E l D l%l"],
	"__tests__/template.marko_1_content": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", "E l D l%l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul class=threads></ul>", " Db%l b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul class=threads></ul>", " Db%l b"]
});
