import Counter from './Counter.js';
import Header from './Header.js';
import './header.css';



const counter = new Counter({
    onChanged: () => {}
});
const header = new Header();

document.getElementsByClassName("test")[0].innerHTML = header.render();

counter.removeListeners();
document.getElementsByClassName("test")[0].innerHTML += counter.render();
counter.addListeners();