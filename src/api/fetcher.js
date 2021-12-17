import { Instance } from "./axiosInstance";

export const fetcher = (url) => async () => await Instance.get(url);

