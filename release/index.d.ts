declare const useAbortableFetch: <T>(url: string | null, init?: RequestInit) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
    abort: () => void;
};
export default useAbortableFetch;
