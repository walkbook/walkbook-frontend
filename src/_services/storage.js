export function saveItem(key, value) {
  localStorage.setItem(key, value);
}

export function loadItem(key, value) {
  localStorage.getItem(key, value);
}

export function clearItem(key) {
  localStorage.removeItem(key); 
}
