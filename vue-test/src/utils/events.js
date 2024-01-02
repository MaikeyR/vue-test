const events = new Map();

export default {
  $on(event, callback) {
    if (!events.has(event)) {
      events.set(event, []);
    }
    events.get(event).push(callback);
  },

  $off(event, callback) {
    throw new Error('Not implemented');
  },

  $emit(event, ...args) {
    if (!events.has(event)) {
      return;
    }
    events.get(event).forEach(callback => callback(...args));
  }
}