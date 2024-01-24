import { get } from '@/utils/request.js';

const getUserInfo = () => get('/user/getUserPerm');

export default { getUserInfo };
