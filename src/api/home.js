import request from "@/utils/request";

export const hkzfList = (params) => {
  return request({
    url: "/home/groups",
    params,
  });
};
