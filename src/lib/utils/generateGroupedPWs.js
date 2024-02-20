import { get } from 'svelte/store';
import { pwData } from "$lib/store";
import { groupBy } from "lodash";

export default function generateGroupedPWs() {
  const data = get(pwData);
  const generated = [];
  let length;
  if (data) length = data.length;
  const pwSorter = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  const pws = Array.from({ length })
    .map((_, i) => getPW(i))
    .sort(pwSorter);
  const groupedPWs = groupBy(pws, (pw) => pw.name[0]);
  //const groupCounts = Object.values(groupedPWs).map((pws) => pws.length);
  const groups = Object.keys(groupedPWs);

  function pw(index = 0) {
    return {
      index: index + 1,
      key: data[index].key,
      name: data[index].name,
      url: data[index].url,
      username: data[index].username,
      password: data[index].password,
      notes: data[index].notes,
    };
  }
  function getPW(index) {
    if (!generated[index]) {
      generated[index] = pw(index);
    }

    return generated[index];
  }

  return { pws, groupedPWs, groups };
}
