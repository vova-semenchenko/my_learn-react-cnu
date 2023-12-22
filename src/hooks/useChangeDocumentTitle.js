import { useEffect } from "react"

const useChangeDocumentTitle = (newTitle) => {
  useEffect(() => {
    if (newTitle) {
      document.title = newTitle
    } else {
      console.log("error")
    }
  }, [newTitle])
}

export default useChangeDocumentTitle;
