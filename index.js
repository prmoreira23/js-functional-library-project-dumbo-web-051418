fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      let values = Object.values(collection);
      for(let i = 0; i < values.length; i++){
        iteratee(values[i]);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      let values = Object.values(collection);
      for(let i = 0; i < values.length; i++){
        values[i] = iteratee(values[i]);
      }
      return values;
    },

    reduce: function(collection, iteratee, acc = 0) {
      for(let i = 0; i < collection.length; i++){
        acc = iteratee(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i];
        }
      }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
