import { atom } from 'recoil';
import { ICountry } from '../../types/country';

/** 로컬스토리지 데이터 가져오고 저장하는 함수(effect)
 *
 * - 참고 : recoil atom effect
 * - url : https://recoiljs.org/ko/docs/guides/atom-effects/#local-storage-persistence */
const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: ICountry, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const countryState = atom<ICountry[]>({
  key: 'countryState',
  default: [],
  effects: [localStorageEffect('country_list')], // 로컬스토리지 관련 effect 추가
});
