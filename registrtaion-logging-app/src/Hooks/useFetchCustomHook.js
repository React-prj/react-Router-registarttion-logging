import React, { useState, useEffect, useCallback, useRef } from 'react'
const useFetchCustomHook = (url, _options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [option, setOptions] = useState(null)


  const postData = () => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }


  // The React useCallback Hook returns a memoized callback function.
  //  Think of memoization as caching a value so that it does not need
  //   to be recalculated. This allows us to isolate resource intensive
  //    functions so that they will not automatically run on every render

  //arrays or objects added to dependencies will trigger an infinite loop
  //use  useRef to wrap an object/array argument
  //which is a useEffect dependancy 
  const options = useRef(_options).current

  const fetchData = useCallback(
    async (fetchOptions) => {
      const controller = new AbortController()
      setIsPending(true)
      try {
        const response = await fetch(url, { ...fetchOptions, signal: controller.signal })
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted')
        } else {
          setError('data fetching failed ')
          console.log(error.message)

        }
      }
      return (() => {
        controller.abort()
      })

      // invoke the function
      if (method === "GET") {
        fetchData()
      }
      if (method === "POST" && option) {
        fetchData(option)
      }

      return () => {
        controller.abort()
      }


    }, [url, options, option]
  )
  useEffect(() => {
    fetchData()
      .catch(err => console.log(err))
  }, [fetchData])
  return { data, isPending, error, postData }
}
export default useFetchCustomHook