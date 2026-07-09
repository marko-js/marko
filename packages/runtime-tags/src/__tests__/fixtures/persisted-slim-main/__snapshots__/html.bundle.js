// data.js
function getResults(search) {
	if (typeof window !== "undefined") throw new Error("getResults is server-only");
	const items = [
		"alpha",
		"beta",
		"gamma",
		"delta"
	].filter((name) => name.includes(search.q ?? "")).map((name, i) => ({
		id: i + 1,
		name
	}));
	return {
		total: items.length,
		totalPages: 3,
		items
	};
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $search_q__closures = /* @__PURE__ */ new Set();
	const $search_page__closures = /* @__PURE__ */ new Set();
	const [search] = $global().search;
	const results = getResults(search);
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (results.total) {
			const $scope1_id = _scope_id();
			_html("<ul class=items>");
			_for_of(results.items, (item) => {
				const $scope5_id = _scope_id();
				_html(`<li>${_escape(_hole_value($scope5_id, "Qa", item.name, _persisted_reason()))}${_el_resume($scope5_id, "a", _persisted_reason())}</li>`);
				_persisted_reason() && writeScope($scope5_id, {});
			}, function(item) {
				return item.id;
			}, $scope1_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 1);
			_html("<nav class=pagination>");
			_for_to(results.totalPages, 1, 1, (page) => {
				const $scope2_id = _scope_id();
				_if(() => {
					if (page === search.page) {
						const $scope6_id = _scope_id();
						_html(`<span class=current>${_escape(page)}</span>`);
						_persisted_reason() && writeScope($scope6_id, { _: _scope_with_id($scope2_id) });
						return 0;
					} else {
						const $scope3_id = _scope_id();
						_html(`<a${_attr("href", _hole_value($scope3_id, "Nhref:a", `/search?page=${page}&q=${search.q}`, _persisted_reason()))}>${_escape(page)}</a>${_el_resume($scope3_id, "a", _persisted_reason())}`);
						_persisted_reason() && _subscribe($search_q__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }));
						return 1;
					}
				}, $scope2_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1);
				_persisted_reason() && _subscribe($search_page__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, 0, $scope1_id, "b", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</nav>");
			_persisted_reason() && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope4_id = _scope_id();
			_html("<p class=empty>No results</p>");
			_persisted_reason() && writeScope($scope4_id, {});
			return 1;
		}
	}, $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason());
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		l: _state_reason() && count,
		Bg: _persisted_reason() && $search_q__closures,
		Bf: _persisted_reason() && $search_page__closures
	});
	_resume_branch($scope0_id);
}, 1);
