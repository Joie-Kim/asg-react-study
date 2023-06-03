import { checkImageUrl } from './util';

const BASE_URL = `https://disney_api.nomadcoders.workers.dev`;

/** 캐릭터 타입 */
export interface ICharacter {
  /** 고유값 */
  id: number;
  /** 출연한 영화 리스트 */
  films: string[];
  /** 캐릭터 이름 */
  name: string;
  /** 캐릭터 이미지 */
  imageUrl: string;
  /** 캐릭터 설명 웹 사이트 주소 */
  sourceUrl: string;
}

/** 전체 캐릭터 리스트 타입 */
export type Characters = Omit<ICharacter, 'films' | 'sourceUrl'>[];

/** 전체 캐릭터 리스트 받아오는 함수 */
export const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters`);
  const json = await response.json();
  // const result = json.slice(0, 100).map((v: ICharacter) => {
  //   const newImageUrl = checkImageUrl(v.imageUrl);
  //   return {
  //     ...v,
  //     imageUrl: newImageUrl,
  //   };
  // });
  // return result;
  return json;
};

/** 특정 캐릭터 정보 받아오는 함수 */
export const fetchCharacterInfo = async (id: number | undefined) => {
  if (id === undefined) return;
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  return await response.json();
};
