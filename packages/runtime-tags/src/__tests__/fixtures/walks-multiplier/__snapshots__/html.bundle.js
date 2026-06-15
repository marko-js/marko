// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>inc <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i><i>10</i><i>11</i><i>12</i><i>13</i><i>14</i><i>15</i><i>16</i><i>17</i><i>18</i><i>19</i><i>20</i><i>21</i><i>22</i><i>23</i><i>24</i><b>${_escape(n)}${_el_resume($scope0_id, "c")}</b><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><s>${_escape(n + 1)}${_el_resume($scope0_id, "d")}</s></div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: n });
	_resume_branch($scope0_id);
}, 1);
