const publicBaseUrl = import.meta.env.PROD
  ? "/auth"
  : "/auth/showcase";

export { publicBaseUrl };