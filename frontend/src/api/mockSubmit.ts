export const mockSubmit = (data: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.2
  
        if (isSuccess) {
          resolve({ message: "Success" })
        } else {
          reject({ message: "Error" })
        }
      }, 1200)
    })
  }