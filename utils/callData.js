const API =  () => {
      return fetch(  "../data/Data.json")
        .then((res) => res.json())
}

export default {API} ;
