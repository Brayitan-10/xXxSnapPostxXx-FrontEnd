import axios from 'axios';

const API = import.meta.env.SIGN_UP;

export const registerRequest = user => axios.post(`${API}`, user);
