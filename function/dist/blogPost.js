"use strict";
// define type alias
Object.defineProperty(exports, "__esModule", { value: true });
// create a blog post
const myPost = {
    title: 'Learn Typescript',
    content: 'Typescript is a superset of javascript add that adds static typing.',
    author: 'anamol hasan',
    published: true,
    publishedDate: '2025 - 09 - 09'
};
// crete a function to display the blog post 
function printPost(post) {
    console.log(`Title : ${post.title}`);
    console.log(`Title : ${post.author}`);
    console.log(`Title : ${post.content}`);
}
printPost(myPost);
//# sourceMappingURL=blogPost.js.map