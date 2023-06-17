const BASE_URL = 'https://movies-api.nomadcoders.workers.dev';

export async function fetchPopular() {
  const res = await fetch(`${BASE_URL}/popular`);
  return await res.json();
}

export async function fetchNowPlaying() {
  const res = await fetch(`${BASE_URL}/now-playing`);
  return await res.json();
}

export async function fetchComingSoon() {
  const res = await fetch(`${BASE_URL}/coming-soon`);
  return await res.json();
}

export async function fetchMovie(id: string) {
  const res = await fetch(`${BASE_URL}/movie?id=${id}`);
  return await res.json();
}

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
