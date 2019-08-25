


function sendApiRequest({ url, method = "GET", params = null }) {
  const isAuthentified = localStorage.getItem('token');
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  if(isAuthentified) {
    headers.append("X-AUTHENTIFIED", "true");
  }

  function handleResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  return fetch(url, {
    method: method,
    headers: headers,
    body: params && JSON.stringify(params)
  }).then(handleResponse);
}

export default sendApiRequest;
