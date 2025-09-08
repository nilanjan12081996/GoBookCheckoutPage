import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

const formDataURL = ['user/create-characters'];
api.interceptors.request.use((req) => {
  let userTokenData;
  try {
    userTokenData = JSON.parse(sessionStorage.getItem('podToken'));
  } catch (error) {
    userTokenData = null;
  }
  let token = userTokenData && userTokenData.token ? userTokenData.token : null;
  // Temp Hack to make formData work
  req.headers['Content-Type'] = 'application/json';
  // req.headers['Content-Type'] = 'multipart/form-data';

  if (formDataURL.includes(req.url)) {
    req.headers['Content-Type'] = 'multipart/form-data';
  }
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      sessionStorage.removeItem('podToken');
    }
    return Promise.reject(error);
  }
);

export default api;
