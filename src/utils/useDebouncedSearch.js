/**
 * Debounce function make api call delay with timeout,
 * it will wait like 300 ms after user stop writing in search field
 * and then hit the function, if user before 300 ms it will reset again.
 * @param {function} func
 * @param {integer} timeout
 * @returns function after certian interval of time
 */
const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default debounce;
