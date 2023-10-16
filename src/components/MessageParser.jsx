class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      // You can implement more advanced message parsing logic here
      if (message.toLowerCase().includes('price')) {
        this.actionProvider.handleCryptoPrice();
        return;
      }
  
      this.actionProvider.handleDefault();
    }
  }
  
  export default MessageParser;
  