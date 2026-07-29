// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_threads = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=threads>`);
	_for_of(input.threads, (thread) => {
		const $scope1_id = _scope_id();
		const $for_content__thread_note__closures = /* @__PURE__ */ new Set();
		let collapsed = false;
		_html(`<li class=thread><h3 class=title>${_escape(_hole_value($scope1_id, "Qa", thread.title, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_threads | _persisted_reason())}</h3><button class=collapse>${_escape(_hole_value($scope1_id, "Qc", "collapse", _state_reason()))}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}`);
		_if(() => {
			{
				_group_site("a7");
				const $scope2_id = _scope_id();
				_try($scope2_id, "a", _content_resume("a4", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_await($scope3_id, "a", resolveAfter(thread.note, 1), (note) => {
						const $scope5_id = _scope_id();
						_html(`<p class=note>${_escape(_hole_value($scope5_id, "Qa", note, _persisted_reason()))}${_el_resume($scope5_id, "a", $sg__input_threads | _persisted_reason())}</p>`);
						$sg__input_threads | _persisted_reason() && writeScope($scope5_id, {});
					}, $sg__input_threads | _persisted_reason(), "a2");
					_subscribe($sg__input_threads | _persisted_reason() && $for_content__thread_note__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }));
					_resume_branch($scope3_id);
				}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a3", () => {
					_scope_reason();
					_scope_id();
					_html("<p class=loading>loading…</p>");
				}, $scope2_id) }) }, "a0", "a5");
				_html("<ol class=replies>");
				_region(() => {
					forOf(thread.replies, (reply) => {
						const $scope6_id = _scope_id();
						_html(`<li class=reply>${_escape(reply.text)}${_el_resume($scope6_id, "a", $sg__input_threads | _persisted_reason())}</li>`);
						$sg__input_threads | _persisted_reason() && writeScope($scope6_id, {});
					});
				}, $scope2_id, "b", "a6");
				_html(`</ol>${_el_resume($scope2_id, "b", $sg__input_threads | _persisted_reason())}`);
				writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "d", 1 | _persisted_reason(), 1 | _persisted_reason(), void 0, void 0, void 0, void 0, void 0, ["a7"]);
		_html("</li>");
		_script($scope1_id, "a8");
		writeScope($scope1_id, {
			h: thread?.note,
			i: thread?.replies,
			j: _seed_fill(_state_reason() && collapsed),
			k: $sg__input_threads | _persisted_reason() && $for_content__thread_note__closures
		});
	}, function(thread) {
		return thread.id;
	}, $scope0_id, "c", $sg__input_threads, $sg__input_threads, $sg__input_threads, "</ul>", 1, "a9");
	_script($scope0_id, "a10");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a2": ["<p class=note> </p>", "D l"],
	"a11": ["<p class=note> </p>", "D l"],
	"a5": ["<!><!><!>", "b%c"],
	"a4": ["<!><!><!>", "b%c"],
	"a7": ["<!><!><ol class=replies></ol>", "b%b b"],
	"a12": ["<!><!><ol class=replies></ol>", "b%b b"],
	"a9": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", "E l D l%l"],
	"a13": ["<li class=thread><h3 class=title> </h3><button class=collapse> </button><!></li>", "E l D l%l"],
	"a1": ["<button class=count>clicked <!></button><ul class=threads></ul>", " Db%l b"],
	"a": ["<button class=count>clicked <!></button><ul class=threads></ul>", " Db%l b"]
});
