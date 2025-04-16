function getCookie(name) {
  let cookieName = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookie.split(";");

  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();

    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return null;
}

function setCookie(name, value, expireDate) {
  document.cookie = `${name}=${value};expires=${expireDate.toUTCString()};path=/`;
}

function setCookieMidnight(name, value) {
  let tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  setCookie(name, value, tomorrow);
}
