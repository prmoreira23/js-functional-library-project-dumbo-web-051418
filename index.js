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

    filter: function(collection, predicate) {
      const newCollection = [];
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let values = Object.values(collection);
      let i = 0;
        while (values[i++]) {
        }
        return i - 1;
    },

    first: function(array, n=1){
      let newArray = [];
      if (n > 1){
        for(let i = 0; i < n; i++){
          newArray.push(array[i]);
        }
        return newArray;
      } else {
        return array[0];
      }
    },

    last: function(array, n=1){
      let newArray = [];
      if (n > 1){
        return array.slice(-n);
      } else {
        return array.slice(-1)[0];
      }
    },

    compact: function(collection) {
      return this.filter(collection, function(element){
        return !!element;
      });
    },

    sortBy: function(collection, iteratee) {
      let newArray = collection.slice();
      newArray.map(function(item){
        return iteratee(item);
      }).sort(function(a, b){
        return a - b;
      });
      return newArray;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
