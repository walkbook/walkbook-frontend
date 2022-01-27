export function saveItem(key, value) {
  sessionStorage.setItem(key, value);
}

export function saveObjItem(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function loadItem(key) {
  return sessionStorage.getItem(key);
}

export function loadObjItem(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export function clearItem(key) {
  sessionStorage.removeItem(key); 
}
