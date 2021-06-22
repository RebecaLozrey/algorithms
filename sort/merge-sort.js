let unsorted1 = [9,2,1,5,6,3,2,7,2];
let unsorted2 = [1,9,0,7,8,9,12,3,2,3,4];
let unsorted3 = [9];
let sortedArray = [];
let leftSubarray = [];
let rightSubarray = [];

const appState = {unsorted1, unsorted2, unsorted3, sortedArray, leftSubarray, rightSubarray};

const logState = ( emoji ) => {
    console.log(emoji, appState);
};

const recursionLimit = ( array ) => {
    if ( array.length <= 1 ) return true;
    return false;
}

const splitArrayInTwo = ( array ) => {
    const middle = Math.round( array.length / 2) + 1;
    leftSubarray = array.slice( 0, middle);
    rightSubarray = array.slice( middle, array.length);
}

const callMergeSortOnLeftArray = ( array ) => {
    mergeSort( array );
}

const callMergeSortOnRightArray = ( array ) => {
    mergeSort( array );
}

const mergeLeftAndRightIntoSortedArray = ( array ) => {
    leftSubarray
    rightSubarray
}

const mergeSort = ( array ) => {
    if ( recursionLimit( array ) ) return; 
    
    splitArrayInTwo( array ); 
    logState( "💕" ); 
    callMergeSortOnLeftArray( array ); // SYNC! Stops current execution and reexecutes with new param then returns here
    logState( "✨" ); 
    callMergeSortOnRightArray( array ); // SYNC! Stops current execution and reexecutes with new param then returns here
    logState( "🎶" );
    mergeLeftAndRightIntoSortedArray();
    logState( "💥" );
   
}

const merge_o_n_log_n = (unsortedArray, sortingAlgorithm) =>{
    if (unsortedArray.length < 1) throw Error("Empty Array");
    sortingAlgorithm(unsortedArray);
}

merge_o_n_log_n(unsorted1, mergeSort);
