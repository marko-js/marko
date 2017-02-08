import Inferno, { render } from 'inferno';
import App from './components/App';

render(
    <App name='Frank' colors={['red', 'green', 'blue']}/>,
    document.body);