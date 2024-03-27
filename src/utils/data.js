
export async function getTestUsers(count = 100, seed = 'abc') {
  

  const url = new URL('https://randomuser.me/api/'); {
    url.searchParams.set('results', String(count));
    url.searchParams.set('seed', seed);
  }

  const response = await fetch(url);

  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  const users = data.results;

  return users;
}
