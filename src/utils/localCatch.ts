export default {
  setStorage: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getStorage: (key: string) => {
    return localStorage.getItem(key);
  },
  deleteStorage: (key: string) => {
    return localStorage.clearItem(key);
  },
};
