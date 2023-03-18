import service from "@/utils/request";

export function getSms(data){
  return service.request({
    url: '/getSms/',
    method: 'POST',
    data
  })
};