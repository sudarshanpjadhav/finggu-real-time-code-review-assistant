import axios from 'axios';
import { FINGGU_API_URL } from '../utils/FingguConstants';

export const finggu_fetchFeedback = async (code) => {
  const response = await axios.post(`${FINGGU_API_URL}/feedback`, { code });
  return response;
};