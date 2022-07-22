class Component {
    constructor(data = {}) {
        let handler = {
            set: this.handleDataChange.bind(this)
        }
        this.data = new Proxy(data, handler)
        console.log(this.data);
    }

    handleDataChange(item, property, value) {
        item[property] = value
        this.rerender(this.data)
        return true
    }

    setRerender(callback) {
        this.rerender = callback;
    }
}

export default Component