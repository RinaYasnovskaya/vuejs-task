import events from '@/data/events.json';
import trunstileEvents from '@/data/trunstile-events.json';

export const getSortedData = () => {
  const sortedData = [];

  trunstileEvents.forEach(event => {
    if (event.type === "open") {
      const result = {};
      result.sessionId = event.sessionId;
      result.open = event;
      sortedData.push(result);
    } else {
      const item = sortedData.find(session => session.sessionId === event.sessionId);

      if (item != undefined) {
        item.exit = event;
      } else {
        const result = {};
        result.sessionId = event.sessionId;
        result.exit = event;
        sortedData.push(result);
      }
    }
  });

  sortedData.forEach(session => {
    const products = events.filter(event => event.sessionId === session.sessionId);
    session.products = products;
  });

  return sortedData;
};
