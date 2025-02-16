import axios from "axios";

const BASE_URL = "https://statsapi.mlb.com/api/v1";

export async function getPlayerId(
  firstName: string,
  lastName: string
): Promise<number> {
  try {
    const response = await axios.get(`${BASE_URL}/people/search`, {
      params: { names: `${firstName} ${lastName}` },
    });

    const people = response.data.people ?? [];
    let id: number;

    if (people) {
      id = people[0].id;
    } else {
      id = -1;
    }
    return id;
  } catch (err: any) {
    if (err.status === 400) {
      //doe something
    }
    console.log(err);
    throw err;
  }
}
