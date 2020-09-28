import Api from './Api';

export function ParseTriangleResultFromFile(file, onComplete, onError) {
    
    let formData = new FormData();

    formData.append("file", file);
  
    Api.post("/parse", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    .then(response => { onComplete(response.data.result); })
    .catch(error => { onError(error); });

} 