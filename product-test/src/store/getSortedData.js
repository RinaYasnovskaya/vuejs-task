import events from '@/data/events.json';
import trunstileEvents from '@/data/trunstile-events.json';

export const getSortedData = () => {
  const sortedData = [];

  trunstileEvents.forEach(event => {
    if (event.type === "open") {
      const result = {
        sessionId: event.sessionId,
        open: event,
        save: false,
      };
      sortedData.push(result);
    } else {
      const item = sortedData.find(session => session.sessionId === event.sessionId);

      if (item != undefined) {
        item.exit = event;
      } else {
        const result = {
          sessionId: event.sessionId,
          exit: event,
          save: false,
        };
        sortedData.push(result);
      }
    }
  });

  sortedData.forEach(session => {
    const allEventsProducts = events.filter(event => event.sessionId === session.sessionId);
    const products = [];
    // TODO: что-то сделать с 0 и -1
    allEventsProducts.forEach(product => {
      const existProduct = products.find(item => item.name === product.productName);

      if (existProduct) {
        existProduct.count = existProduct.count - product.productCount;
      } else {
        products.push({ name: product.productName, count: (0-product.productCount) });
      }
    });

    session.products = products;
  });

  return sortedData;
};
