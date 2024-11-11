import { useState, useCallback, startTransition, ChangeEvent } from 'react';
import debounce from 'lodash.debounce';

function useDebouncedSearch(initialValue = '', delay = 300) {
  const [search, setSearch] = useState(initialValue);

  const debouncedChangeHandler = useCallback(
    debounce((value: string) => {
      startTransition(() => {
        console.log(value);
        setSearch(value);
      });
    }, delay),
    [delay]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedChangeHandler(event.target.value);
  };

  return [search, handleChange] as const;
}

export default useDebouncedSearch;
