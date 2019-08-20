// @flow
import { authHeader } from "./auth-header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const http = {
  get,
  post,
  put,
  patch,
  delete: remove,
  remove,
  fileUpload
};

function get(
  url /*: string */,
  headers /*: any */,
  raw /*: ?boolean */ = false
) {
  const requestOptions = {
    method: "GET",
    headers: headers ? headers : { ...authHeader() }
  };

  return fetch(url, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

function post(
  url /*: string */,
  data /*: mixed */,
  headers = {} /*: any */,
  raw /*: boolean */ = false
) {
  headers = Object.assign({}, authHeader(), headers);
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };

  let responsePromise = fetch(url, requestOptions);
  if (raw) {
    return responsePromise;
  }
  return responsePromise.then(handleResponse).catch(handleError);
}

function put(
  url /*: string */,
  data /*: mixed */,
  headers /*: any */,
  raw /*: ?boolean */ = false
) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: JSON.stringify(data)
  };

  let responsePromise = fetch(url, requestOptions);
  if (raw) {
    return responsePromise;
  }
  return responsePromise.then(handleResponse).catch(handleError);
}

function fileUpload(
  url /*: string */,
  data /*: mixed */,
  headers /*: any */,
  raw /*: ?boolean */ = false
 ) {
  headers= headers ? headers : { ...authHeader() , }
    delete headers["content-type"]
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: data
  };
  return fetch(url, requestOptions)
    .then(handleResponse)
    .catch(handleError);
 }

function patch(
  url /*: string */,
  data /*: mixed */,
  headers /*: any */,
  raw /*: ?boolean */ = false
) {
  const requestOptions = {
    method: "PATCH",
    headers: { ...authHeader() },
    body: JSON.stringify(data)
  };

  let responsePromise = fetch(url, requestOptions);
  if (raw) {
    return responsePromise;
  }
  return responsePromise.then(handleResponse).catch(handleError);
}

function remove(
  url /*: string */,
  headers /*: any */,
  raw /*: ?boolean */ = false
) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  let responsePromise = fetch(url, requestOptions);
  if (raw) {
    return responsePromise;
  }
  return responsePromise.then(handleResponse).catch(handleError);
}

function handleError(response) {
  if (
    response == "TypeError: Failed to fetch" ||
    response === "TypeError: Failed to fetch  "
  ) {
    let headers = {
      "x-api-key": "G0OndZH93PuXhhZk",
      "content-type": "application/json"
    };
    const requestOptions = {
      method: "GET",
      headers: headers ? headers : { ...authHeader() }
    };
    let url = `http://dummy.restapiexample.com/api/v1/employees`;

    fetch(url, requestOptions)
      .then(() => toast.error("Server down"))
      .catch(error => toast.error("No Internet"));


  }
}

function handleResponse(response) {
  return response.text().then(text => {
    try {
      const data = text && JSON.parse(text);
      if ((data.statusCode) !== 200 && (data.statusCode !== 201)) {
        // toast.error(data.message || data.output.payload.message);
        console.log(data.message)
      }
      return data;
    } catch (error) {
      toast.error("Internal Server Error");
    }
  });
}
