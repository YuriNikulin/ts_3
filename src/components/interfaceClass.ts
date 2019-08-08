export default function() {
  interface LoggerInterface {
    log(arg: any): void;
    otherOne(): boolean;
  }
  
  class Logger implements LoggerInterface {
    log(arg) {
      if (typeof console.log === 'function') {
        console.log(arg);
      } else {
        alert(arg);
      }
    }

    otherOne() {
      console.log('another one');
      return true;
    }
  }
  
  const myLogger = new Logger();
  myLogger.log('zdravstvui, mama, pishu tebe s zony');
  myLogger.otherOne();
}
