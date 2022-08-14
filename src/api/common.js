import axios from "axios";

const API_ENDPOINT = "http://localhost:9000";
const APIClient = ({
  route = "/",
  payload = {},
  method = "POST",
  successFn = () => { },
  errorFn = () => { },
  finallyFn = () => { },
}) => {
  axios({
    method,
    url: `${API_ENDPOINT}${route}`,
    data: payload,
    timeout: 30000,
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(
        `%c ${method} `,
        "background: green;color:white",
        `${route} - Response: `,
        response.data
      );
      successFn(response.data);
    })
    .catch((err) => {
      console.log(
        `%c ${method} `,
        "background: red;color:white",
        `${route} - Error: `,
        err
      );
      errorFn(err);
    }).finally(() => {
      if (finallyFn) finallyFn()
    })
};
export default APIClient;
