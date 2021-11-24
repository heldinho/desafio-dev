import Axios from 'axios';

const URI = 'http://localhost:3333';

const Http = Axios.create({
  baseURL: URI,
});

export const create = async payload => {
  try {
    const config = {
      method: 'POST',
      url: `/remessas`,
      data: payload,
    };
    const { data } = await Http(config);
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAll = async () => {
  try {
    const config = {
      method: 'GET',
      url: `/remessas`,
    };
    const { data } = await Http(config);
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getAllShops = async () => {
  try {
    const config = {
      method: 'GET',
      url: `/shops`,
    };
    const { data } = await Http(config);
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
