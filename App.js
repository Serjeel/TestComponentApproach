import Component from './Component.js';
import Counter from './Counter.js';
import Header from './Header.js';

// Переделать render под html и начинать переносить Subway на классовый подход

class App extends Component {
    render() {
        const counter = new Counter({
            initialCount: 0
        });
        const header = new Header();

        document.getElementsByClassName("test")[0].innerHTML = header.render();

        counter.removeListeners();
        document.getElementsByClassName("test")[0].innerHTML += counter.render();
        counter.addListeners();
    }
}
const app = new App();
document.body.innerHTML = app.render();
app.addListeners()