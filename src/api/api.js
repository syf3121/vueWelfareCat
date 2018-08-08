import { getData, postData } from '@/utils/request';

export const getUserInfo = p => getData('api/user/getUserInfo', p);

export const loginAction = p => postData('api/user/login', p);
