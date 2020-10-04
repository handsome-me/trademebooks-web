import api from '../utils/api';

export const getAccountSettings = async () => {
  try {
    const response = await api.get(`/account`);
    const responseJson = response.data.data;
    return responseJson;
  } catch (error) {
    console.log({ error })
  }
};

export const saveAccountSettings = async (data) => {
  try {
    const response = await api.put(`/account`, data);
    const responseJson = response.data.data;
    return responseJson;
  } catch (error) {
    console.log({ error })
  }
};


