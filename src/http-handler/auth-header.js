export function authHeader() {
  let tokens = localStorage.getItem('tokens');
  if (tokens !== undefined && tokens !== '' && tokens !== null) {
    return {
      // 'x-api-key': 'G0OndZH93PuXhhZk',
      'content-type': 'application/json',
      url: window.location.pathname,
      Authorization: 'Bearer ' + tokens
    };
  } else {
    return {
      // 'x-api-key': 'G0OndZH93PuXhhZk',
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'mode': 'no-cors',
      'Sec-Fetch-Mode': 'no-cors'
    };
  }
}
