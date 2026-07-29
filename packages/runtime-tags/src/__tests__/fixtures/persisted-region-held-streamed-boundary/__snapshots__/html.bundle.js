// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Item = { content: _content("a9", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h2 class=title>${_escape(_hole_value($scope2_id, "Qa", $global().title, _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}</h2>`);
		_try($scope2_id, "b", _content_resume("a7", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "a", resolveAfter($global().reviews), (reviews) => {
				const $scope5_id = _scope_id();
				_html(`<p class=updated>updated ${_sep(_persisted_reason())}${_escape(_hole_value($scope5_id, "Qa", $global().stamp, _persisted_reason()))}${_el_resume($scope5_id, "a", _persisted_reason())}</p><div class=reviews>`);
				_region(() => {
					forOf(reviews, (i) => {
						const $scope6_id = _scope_id();
						_html(`<div class=review>review number ${_sep(_persisted_reason())}${_escape(i)}${_el_resume($scope6_id, "a", _persisted_reason())} is static</div>`);
						_persisted_reason() && writeScope($scope6_id, {});
					});
				}, $scope5_id, "b", "a4");
				_html(`</div>${_el_resume($scope5_id, "b", _persisted_reason())}`);
				_persisted_reason() && writeScope($scope5_id, {});
			}, _persisted_reason(), "a5");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
			_scope_reason();
			_scope_id();
			_html("loading…");
		}, $scope2_id) }) }, "a0", "a8");
		_persisted_reason() && writeScope($scope2_id, {});
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "item" ? Item : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a10");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<p class=updated>updated <!></p><div class=reviews></div>", "Db%l b"],
	"a11": ["<p class=updated>updated <!></p><div class=reviews></div>", "Db%l b"],
	"a8": ["<!><!><!>", "b%c"],
	"a7": ["<!><!><!>", "b%c"],
	"a12": ["<h2 class=title> </h2><!><!>", "D l%c"],
	"a9": ["<h2 class=title> </h2><!><!>", "D l%c"],
	"a2": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
