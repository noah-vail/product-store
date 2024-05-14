const serverURL = "https://localhost:7058/api/";

const fetcher = async (endpoint) => {
  let payload;
  let headers = buildHeaders();

  try {
    let response = await fetch(`${serverURL}${endpoint}`, {
      method: "GET",
      headers: headers,
    });
    payload = await response.json();
  } catch (err) {
    console.log(err);
    payload = { error: `Error has Occured: ${err.message}` };
  }

  return payload;
};

const poster = async (endpoint, dataToPost) => {
  let payload;
  let headers = buildHeaders();
  try {
    let response = await fetch(`${serverURL}${endpoint}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(dataToPost),
    });
    payload = await response.json();
  } catch (err) {
    payload = err;
  }
  return payload;
};

const buildHeaders = () => {
  const myHeaders = new Headers();
  const customer = JSON.parse(sessionStorage.getItem("customer"));

  if (customer) {
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + customer.token);
  } else {
    myHeaders.append("Content-Type", "application/json");
  }

  return myHeaders;
};

const formatDate = (date) => {
  let d;
  // see if the date is coming from the server
  date === undefined ? (d = new Date()) : (d = new Date(Date.parse(date)));

  let _day = d.getDate();
  let _month = d.getMonth() + 1;
  let _year = d.getFullYear();
  let _hour = d.getHours();
  let _min = d.getMinutes();

  let morning = " AM";
  let afternoon = " PM";

  if (_min < 10) {
    _min = "0" + _min;
  }

  if (_hour >= 12) {
    return (
      _year + "-" + _month + "-" + _day + " " + _hour + ":" + _min + afternoon
    );
  } else {
    return (
      _year + "-" + _month + "-" + _day + " " + _hour + ":" + _min + morning
    );
  }
};

export { fetcher, poster, formatDate };
