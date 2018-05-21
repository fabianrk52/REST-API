var data = require("./data/category.json");

module.exports = {
    getAll:()=>{
        return data;
    },
    
    getbyID:(id)=>{
        let result = false;
        for(let i in data.Categories){
            var cat = data.Categories[i];
        if(cat.id==id){
            result = true;
            return({"Title": cat.title});
        }
    }
    if(!result)
        return ({"Error":"Not Found"});
    },
    search:(id,title)=>{
        let result = false;
        for(let i in data.Categories){
            var cat = data.Categories[i];
        if(cat.id==id && cat.title==title){
            result = true;
            return({"Title": cat.title,
            "Visitors":cat.visitors,
            "Expectancy":cat.expectancy,
            "Revenue":cat.revenue});
            }
    }
    if(!result)
        return ({"Error":"Not Found"});
    },
}