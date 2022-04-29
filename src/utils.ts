export const EndPoints = {
  getUsers: () => `https://mctekk.deno.dev/v1/users`,
  postUser: () => `https://mctekk.deno.dev/v1/users`,
  login: () => `https://mctekk.deno.dev/v1/auth`,
};

export function Cookie() {
  const cookies = document.cookie.split(";").map((c) => c.trim());
  const cookiesMap = new Map<string, string>();

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");

    cookiesMap.set(key, value);
  }

  return cookiesMap;
}
