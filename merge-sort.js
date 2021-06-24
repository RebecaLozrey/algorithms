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

            console.log( '💾 ---1 BUFFER----', see(buffer));
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


            console.log( '💾 ---2 BUFFER----', see(buffer));
            console.log( '🟡 B:', bufferIndex, '🟢 L: ', leftIndex, '🔵 R:', rightIndex);
    
            buffer[bufferIndex] = left[leftIndex];
            bufferIndex++;
            leftIndex++; 

           
        }
    };

    while ( rightIndex < right.length ) {

       
        console.log( '💾 ---3 BUFFER----', see(buffer));
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
  
    mergeSort( left ); // sincrona la recursividad & closure
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

// BigO Notation:
// n is the NUMBER (n) of elements in the array and it's represented in the x axis.
// the y axis represents the number of OPERATIONS (o) in one or many iterations witch in the end are time.

// BigO Notation: 
// If the algorithm -splits in two the array recursively- it costs log(n) iterations.
// If each element is pointed at at only one time we multiply by n.

// BigO O(nLog(n)) HIGH performance
// nLog(n)
// Operations = elements * log(elements)
// O = n * log(n)

// 0.001 EACH OPERATION
// O = 5 * log (5) = 3.5 operaciones
// O = 5 * log (5) = 3.5 milisegundos en ejecutarse = .0035 segundos 

// 0.001 EACH OPERATION
// O = 10,000 * log (10,000) = 40,000 operaciones 
// O = 10,000 * log (10,000) = 40,000 milisegundos en ejecutarse = 40 segundos

// BigO O(n^2) LOW performance
// O = n^2 
// Operations = elements * elements
// O = n*n

// 0.001 EACH OPERATION
// O = 5 * 5 = 25 operaciones
// O = 5 * 5 = 25 milisegundos en ejecutarse = .025 segundos 

// 0.001 EACH OPERATION
// O = 100,000 * 100,000 = 10,000,000,000 operaciones
// O = 100,000 * 100,000 = 10,000,000,000 milisegundos en ejecutarse = 19 años




