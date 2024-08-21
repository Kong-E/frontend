'use server';

import { instance } from './instance';

interface SubjectPayload {
  addedSubjects: string[]; // 추가된 과목 리스트 (과목 이름)
  deletedSubjects: number[]; // 삭제된 과목 리스트 (과목 ID)
}

export const subjectFormApi = async (payload: SubjectPayload) => {
  try {
    const requestBody: { addedSubjects: string[]; deletedSubjects: number[] } = {
      addedSubjects: [], // 기본값으로 빈 배열 설정
      deletedSubjects: [], // 기본값으로 빈 배열 설정
    };

    // 추가된 과목이 있으면 requestBody에 추가
    if (payload.addedSubjects.length > 0) {
      requestBody.addedSubjects = payload.addedSubjects;
    }

    // 삭제된 과목이 있으면 requestBody에 추가
    if (payload.deletedSubjects.length > 0) {
      requestBody.deletedSubjects = payload.deletedSubjects;
    }

    // 서버로 전송
    const response = await instance('subjects', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });

    if (response.error) {
      console.error('과목 처리 중 오류 발생:', response.error);
      return { success: false, message: '요청을 처리하는 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.' };
    }

    return { success: true };
  } catch (error) {
    console.error('subjectFormApi 에러:', error);
    return { success: false, message: '요청을 처리하는 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.' };
  }
};

interface Subject {
  id: number;
  name: string;
}

interface SubjectsResponse {
  subjects: Subject[];
}

export const fetchSubjects = async (): Promise<SubjectsResponse> => {
  try {
    const response = await instance('timer', { method: 'GET' });

    if (response.error) {
      throw new Error('Error fetching subjects: ' + response.error.message);
    }

    return response;
  } catch (error) {
    console.error('Error in fetchSubjects:', error);
    throw error;
  }
};