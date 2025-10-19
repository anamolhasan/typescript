// define type alias

type BlogPost = {
    title:string,
    content:string,
    author:string,
    published:boolean,
    publishedDate?:string
}

// create a blog post

const myPost : BlogPost = {
    title:'Learn Typescript',
    content:'Typescript is a superset of javascript add that adds static typing.',
    author:'anamol hasan',
    published:true,
    publishedDate:'2025 - 09 - 09'
}


// crete a function to display the blog post 
function printPost(post:BlogPost){
  console.log(`Title : ${post.title}`)
  console.log(`Title : ${post.author}`)
  console.log(`Title : ${post.content}`)
  console.log(`Published : ${post.published}`)

  if(post.publishedDate){
    console.log(`Date: ${post.publishedDate}`)
  }
}

printPost(myPost)