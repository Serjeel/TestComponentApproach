class Component {
    constructor(data) {
        this.data = data;
        this.proxy = new Proxy(this.data, {});
        console.log(this.proxy);
    }

    handleDataChange() {
        
    }

    setRerender(callback) {
        this.rerender = callback
    }
}

export default Component