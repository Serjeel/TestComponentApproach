import Component from './Component';

class Counter extends Component {
    constructor(props) {
        const data = {
            count: props.initialCount,
        }
        super(data)
        super.setRerender(this.rerender)
    }

    inputChange() {
        const previousValue = this.data.count;
        this.data.count = parseInt(document.getElementById("counter").value);
        const presentValue = this.data.count;
        if (previousValue !== presentValue) {
            console.log(this.data.count);
        }
    }

    rerender() {
        document.getElementById("counter").value = this.data.count;
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
            <button class="item-button" id='plus'>+</button>
      `)
    }

    addListeners() {
        document.getElementById('plus').addEventListener('click', this.plusClick.bind(this));
        document.getElementById('minus').addEventListener('click', this.minusClick.bind(this));
        document.getElementById('counter').addEventListener('blur', this.inputChange.bind(this));
    }

    removeListeners() {
        if (document.getElementById('plus') && document.getElementById('minus')) {
            document.getElementById('plus').removeEventListener('click', this.plusClick.bind(this));
            document.getElementById('minus').removeEventListener('click', this.plusClick.bind(this));
            document.getElementById('counter').removeEventListener('blur', this.inputChange.bind(this));
        }
    }
}

export default Counter;