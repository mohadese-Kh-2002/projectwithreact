export const getBlogs=async()=>{
    const response=await fetch('http://localhost:4000/blogs')
    const data=await response.json()
    return data
}
export const getBlog=async(id:string | number)=>{
    const response=await fetch(`http://localhost:4000/blogs/${id}`)
    const data=await response.json()
    return data
}
export const getProjects=async ()=>{
    const response=await fetch('http://localhost:4000/projects')
    const data=await response.json()
    return data
}
