import { useState } from "react";

export default function useLoading(defaultValue) {
  const [loading, setLoading] = useState(defaultValue);

  function ActiveLoading(loading) {
    setLoading((currentValue) =>
      typeof loading === "boolean" ? loading : !currentValue
    );
  }

  return { loading, ActiveLoading };
}
