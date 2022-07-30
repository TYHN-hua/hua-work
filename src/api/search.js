import request from "@/utils/request";

export const getHoustList = (params) => {
  return request({
    url: "/houses",
    params,
  });
};