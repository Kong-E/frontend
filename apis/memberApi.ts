import { revalidatePath } from 'next/cache';
import { instance } from './instance';

// 유저정보 조회
export const getUserInfo = async () => {
  const response = await instance(`members`, {
    method: 'GET',
  });

  return response;
};

// 유저정보 수정
export const patchUserInfo = async ({ name, course }: { name: string; course: string }) => {
  const response = await instance(`members`, {
    method: 'PATCH',
    body: JSON.stringify({ name, course }),
  });

  return response;
};

// 비밀번호 업데이트
export const postPwUpdate = async ({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) => {
  const response = await instance('members', {
    body: JSON.stringify({ oldPassword, newPassword }),
    method: 'POST',
  });
  return response;
};
