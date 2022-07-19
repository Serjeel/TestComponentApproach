class Component {
    handleDataChange() {
        
    }
}

class Counter extends Component { // В родительский элемент Component прописать 
    // вызов функции handleDataChange, которая всё обновляет, и обернуть
    // входящие данные в proxy. А также там с датой надо чё-то пошаманить в Component

    constructor() {
        const data = {
            count: 0
        };

        super(data, this.handleDataChange)
    }

    setCount() {
        this.data.count = parseInt(document.getElementById("counter").value);
    }

    plusClick() {
        this.data.count += 1;
    }

    minusClick() {
        this.data.count -= 1;
    }

    render() {
        return (/*html*/`
            <button class="item-button" id='minus'>-</button>
            <input class="input" id="counter" type="text" value=${this.data.count}>
            <button class="item-button" id='plus' >+</button>
      `)
    }

    addListeners() {
        document.getElementById('plus').addEventListener('click', this.plusClick.bind(this));
        document.getElementById('minus').addEventListener('click', this.minusClick.bind(this));
        document.getElementById('counter').addEventListener('blur', this.setCount.bind(this));
    }

    removeListeners() {
        if (document.getElementById('plus') && document.getElementById('minus')) {
            document.getElementById('plus').removeEventListener('click', this.plusClick.bind(this));
            document.getElementById('minus').removeEventListener('click', this.plusClick.bind(this));
            document.getElementById('counter').removeEventListener('blur', this.setCount.bind(this));
        }
    }

    handleDataChange(data) {
        const {
            count
        } = data;

        document.getElementById("counter").value = count;
    }
}

export default Counter;