import Component from './Component.js';
import Counter from './Counter.js';
import Header from './Header.js';

// Сделать из App класс и засунуть сюда count и передать его через пропс

class App extends Component {
    render() {
        const counter = new Counter();
        const header = new Header();

        document.getElementsByClassName("test")[0].innerHTML = header.render();

        counter.removeListeners();
        document.getElementsByClassName("test")[0].innerHTML += counter.render();
        counter.addListeners();
    }
}
const app = new App();
app.render();