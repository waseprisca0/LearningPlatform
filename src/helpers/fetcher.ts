type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

export const fetcher = <TData, TVariables>(
  query: string,

  variables?: TVariables,
  options?: RequestInit["headers"]
) => {
  return async (): Promise<TData> => {
    const { next, cache, ...restOptions } = options || {};
    const body = JSON.stringify({
      query,
      variables,
      options,
    });
    const res = await fetch(`https://wondrous-caribou-87.hasura.app/v1/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": 'UNAIDWv5FxeVTNVFBkaW6Bf8VYAe4P5R7fGRefQVC2MakB6Za5JiQw3tMxrO5EZ0',
        ...restOptions,
      },
      body,
      next,
      cache,
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];
      throw new Error(message);
    }
    return json.data;
  };
};
