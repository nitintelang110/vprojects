import React, { useState } from 'react'
import './TextHighlighter.css'

export const TextHighlighter = () => {

    const [search, setSearch] = useState();

    const handleClick = () => {
        if (search) {
            const text = document.getElementById('info')
            const word = search.trim();
            const regexp = new RegExp(word, 'gi')
           text.innerHTML =  text.innerHTML.replace(regexp, `<mark>${word}</mark>`) 
    }
}

    const handleKey = (e) => {
        if(e.keyCode == 13){
     alert("ok")
            }
}

    

  return (
      <div className='highlighter_container'>
          <div className="inp">
            
                 <input type='text' placeholder='Search Here' onChange={(e)=>setSearch(e.target.value)} />  
           
                 <button id='search_btn' onClick={handleClick}  onKeyDown={(e)=>handleKey(e)}>Search</button> 
           
              
          </div>
          
          <div className="info" id='info'>
            <h4>The Monkey and the Crocodile</h4>  
This is a story from Panchatantra.
A monkey lived on a berry tree on the River Bank. Once he saw a crocodile under the tree who looked hungry and tired. He gave the crocodile some berries, the crocodile thanked the monkey and became one of his friends. 
The monkey would give berries to the crocodile every day. One day the monkey even gave the crocodile extra berries to take to his wife.
His wife enjoyed the berries but told her husband that she wanted to eat the monkey's heart. She was a wicked and cunning woman. The crocodile was upset, but he decided that he needed to make his wife happy.
On the next day, the crocodile went to the monkey and said that his wife had called him for dinner. The crocodile carried the monkey on his back across the river. He told this monkey his wife's plan. 
The monkey had to think quickly if he wanted to save himself. He told the crocodile that he left his heart at on the berry tree and that they needed to return.
On reaching the monkey climbed the tree and spoke. "I'm not getting down; you betrayed my trust and that means our friendship is over"
              </div>
    </div>
  )
}


