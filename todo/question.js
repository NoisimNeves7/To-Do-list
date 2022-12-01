const sortedSquares = (A) => {
    return A.map((ele) => { 
        return ele*ele   
    }).sort((a,b) => {
        return a-b 
    })
   
};
