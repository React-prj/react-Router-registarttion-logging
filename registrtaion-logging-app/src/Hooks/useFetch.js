import { useState, useEffect, useCallback,useRef, useMemo } from "react"

const useFetch = (url, method="GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  //setOptions is keeping track of the options object containing  method post and headers etc
  const [options, setOptions] = useState(null)
  const [fetchOptions, setFetchOptions] = useState(null)


  //arrays or objects added to dependencies will trigger an infinite loop
  //use  useRef to wrap an object/array argument
  //which is a useEffect dependancy 
   const  fetchType = useRef(method).current
  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }


  const fetchData = useCallback(async () => {
    const controller = new AbortController()

    setIsPending(true)

    try {
      const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      const data = await res.json()
      setFetchOptions(fetchOptions)
      setIsPending(false)
      setData(data)
      setError(null)
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("the fetch was aborted")
      } else {
        setIsPending(false)
        setError('Could not fetch the data')
      }
    }
    // invoke the function
    if (fetchType === "GET") {
      fetchData()
    }
    if (fetchType === "POST" && options) {
      fetchData(options)
    }

    return () => {
      controller.abort()
    }
  }, [fetchOptions, fetchType, options, url])


  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, isPending, error, postData }
}

export default useFetch