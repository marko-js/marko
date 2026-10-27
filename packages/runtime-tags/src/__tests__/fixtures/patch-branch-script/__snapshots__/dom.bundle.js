// template.marko
const $if_content__setup = _script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.inserts = String(+(el.dataset.inserts || 0) + 1);
	}
});
