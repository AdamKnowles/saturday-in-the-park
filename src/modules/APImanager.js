const remoteURL = "http://localhost:8000";
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

export default Object.create(null, {
  //get entry
  

  //delete entry
  delete: {
    value: function (resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      }).then(e => e.json());
    }
  },

  //add entry
  
  
 
});
