import { useState, useRef, useCallback, useEffect } from "react";



interface IProps {
  getDataForSearchLocation: (searchTerm: string) => void
  id?: string
}


export const SearchInput: React.FC<IProps> = ({ id, getDataForSearchLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)
  const entryRef = useRef<boolean>(true)



  useEffect(() => {

    if (entryRef.current) {
      entryRef.current = false
      return
    } else {
      if (id) {
        setSearchTerm(id)
        getDataForSearchLocation(id)
      }
    }

  }, [id])



  const debouncedApiCall = useCallback(debounce(() => {
    if (typeof inputRef.current?.value !== 'string') return
    getDataForSearchLocation(inputRef.current?.value)
  }, 1000), [])


  function debounce(fn: any, delay: number) {
    let timeoutId: number | NodeJS.Timeout;
    return function (...args: any[]) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }


  return (
    <section className="search flex justify-center">
      <input
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          debouncedApiCall(searchTerm);
        }}
      />
    </section>
  );
}

