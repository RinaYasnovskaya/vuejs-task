import events from '@/data/events.json';
import trunstileEvents from '@/data/trunstile-events.json';

export const getSortedData = () => {
  const sortedData = [];
  const allSessionsId = [];

  trunstileEvents.forEach(event => {
    if (event.type === "open") {
      const result = {
        sessionId: event.sessionId,
        open: event,
        save: false,
      };
      sortedData.push(result);
      allSessionsId.push(event.sessionId);
    } else {
      const item = sortedData.find(session => session.sessionId === event.sessionId);

      if (item) {
        item.exit = event;
      } else {
        const result = {
          sessionId: event.sessionId,
          exit: event,
          save: false,
        };
        sortedData.push(result);
        allSessionsId.push(event.sessionId);
      }
    }
  });

  sortedData.forEach(session => {
    const allEventsSession = events.filter(event => event.sessionId === session.sessionId);
    const products = [];
    
    allEventsSession.forEach(product => {
      const existProduct = products.find(item => item.name === product.productName);

      if (existProduct) {
        existProduct.count = existProduct.count - product.productCount;
      } else {
        products.push({ name: product.productName, count: (0-product.productCount) });
      }
    });

    session.products = products.filter(product => product.count != 0);
  });

  return [sortedData, allSessionsId];
};
