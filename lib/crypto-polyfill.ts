// Crypto polyfill for older browsers
if (typeof window !== 'undefined' && !window.crypto?.randomUUID) {
  if (!window.crypto) {
    // @ts-ignore
    window.crypto = {};
  }
  
  // @ts-ignore
  window.crypto.randomUUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
}