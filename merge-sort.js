function recursionLimit( buffer ) {
    if ( buffer.length <= 1 ) return true;
    return false;
}

function getArrayLeft( buffer ) {
    return buffer.slice( 0, Math.round( buffer.length / 2 ));
}

function getArrayRight( buffer ) {
    return buffer.slice( Math.round( buffer.length / 2 ), buffer.length );
}

const see = (array) => {
    const initialValue = {};
    let key = -1;
    let object = array.reduce((obj, item) => {
        ++key;
      return {
        ...obj,
        [key]: item,
      };
    }, initialValue);
    return object;
  };

function sortAndMerge( buffer, left, right) {

    var bufferIndex = 0;
    var leftIndex = 0;
    var rightIndex = 0;

    while ( leftIndex < left.length ) {
        if ( rightIndex < right.length ){

            console.log( '💾 ---BUFFER----', see(buffer));
            console.log( '🟡 B:', bufferIndex, '🟢 L: ', leftIndex, '🔵 R:', rightIndex);

            if ( left[leftIndex] <= right[rightIndex] ){
                buffer[bufferIndex] = left[leftIndex];
                bufferIndex++;
                leftIndex++;
            } else {
                buffer[bufferIndex] = right[rightIndex];
                bufferIndex++;
                rightIndex++;
            }

          

        } else {


            console.log( '💾 ---BUFFER----', see(buffer));
            console.log( '🟡 B:', bufferIndex, '🟢 L: ', leftIndex, '🔵 R:', rightIndex);
    
            buffer[bufferIndex] = left[leftIndex];
            bufferIndex++;
            leftIndex++; 

           
        }
    };

    while ( rightIndex < right.length ) {

       
        console.log( '💾 ---BUFFER----', see(buffer));
        console.log( '🟡 B:', bufferIndex, '🟢 L: ', leftIndex, '🔵 R:', rightIndex);

        buffer[bufferIndex] = right[rightIndex];
        bufferIndex++;
        rightIndex++; 

        
    }



}

function mergeSort( buffer ){
    const limit =  recursionLimit( buffer );
    if ( limit ) {
        console.log( '🛑 ---LIMIT HIT---');
        return; 
    }
    const left =  getArrayLeft( buffer );
    console.log( '👈 ✂️ ---LEFT SLICE---', left);
    const right =  getArrayRight( buffer );
    console.log( '✂️ 👉 ---RIGHT SLICE---', right);
  
    mergeSort( left );
    console.log( '👈 🌱 ---LEFT BRANCH---', left);
    //...
    mergeSort( right );
    console.log( '🌱 👉 ---RIGHT BRANCH---', right);
    //...
    sortAndMerge( buffer, left, right);
}


var unsorted1 = [9,2,1,5];

console.log( '❌ ---INITIAL---', unsorted1);

mergeSort(unsorted1);

console.log( '✔️ ---FINAL---', unsorted1);

