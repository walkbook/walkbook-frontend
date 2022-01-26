export function saveItem(key, value) {
  sessionStorage.setItem(key, value);
}

export function loadItem(key) {
  return sessionStorage.getItem(key);
}

export function clearItem(key) {
  sessionStorage.removeItem(key); 
}
