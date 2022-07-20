

class Header {

    constructor() {
        
        this.text = "Счётчик";
    }

    render() {
        return (`
      <h1>${this.text}</h1>
      `)
    }
}

export default Header;