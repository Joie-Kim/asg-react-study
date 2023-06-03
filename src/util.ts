import DEFAULT_IMG from '@/assets/default_profile.png';

export const handleImgError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = DEFAULT_IMG;
};
