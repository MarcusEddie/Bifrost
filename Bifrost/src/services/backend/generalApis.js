import { request } from 'umi';

export async function getHttpMethods(){
  return request('/api/generalApis/getHttpMethods');
}

export async function getCasePriority(){
  return request('/api/generalApis/getCasePriority');
}

export async function getCaseCheckMode(){
  return request('/api/generalApis/getCaseCheckMode');
}