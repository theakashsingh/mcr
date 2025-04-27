import { Children, useState } from 'react'
import './App.css'
import CommentBox from './components/CommentBox'
import data from "./data.json"

function App() {
      const [comments, setComments] = useState(data)
      const handleCommentReply = (id,comment,name)=>{
         const newComment = {
          id: new Date().toString(),
          name:name,
          comment:comment,
          Children:[]
         }
         const updateComment = (nodeList) =>{
             console.log(nodeList);
             
           return  nodeList.map((node)=>{
              if (node.id === id) {
                return{
                  ...node,children:[...(node.children||[]),newComment]
                }
              }else if(node.children && node.children.length > 0){
                return{
                ...node,
                children:updateComment(node.children)
                }
              }else{
                return node
              }
             })
         }

         setComments(prev=>updateComment(prev))
      }
  return (
    <div>
      <CommentBox comments={comments} handleCommentReply={handleCommentReply}/>
    </div>
  )
}

export default App
