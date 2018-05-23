var data = require("./data/category.json"),
    mongoose = require('mongoose'),
    consts = require("./const"),
    catSchema =require("./modelExports");


    var result,arr,flag;


    mongoose.connect(consts.MLAB_KEY);
    var db = mongoose.connection;
    module.exports = {
        getAll:()=>{
                catSchema.find({},
                    (err,category)=>{
                        if(err) console.log(`error: ${err}`);
                        result = category[0];
            },
                err=>{
                    console.log(`connection error:${err}`);
                });
                return result;
            },
        getbyID:(id)=>{
           catSchema.find({},
                (err,category)=>{
                    if(err) console.log(`error: ${err}`);
                    arr= category[0].Categories;
                    if(id-1<=arr.length-1){
                        result = arr[id-1];
                        flag = true;
                    }
                    else{
                        flag = false;
                    }
                err=>{
                    console.log(`connection error:${err}`);
                    }
                }   
           ); 
                if(flag){
                    flag = false;
                    return ({"Title":result.title});
                }
                if(!flag){
                    return ({"Error":"Not Found"});
                }

        },
        search:(id,title)=>{
            catSchema.find({},
                 (err,category)=>{
                    if(err) console.log(`error: ${err}`);
                    arr= category[0].Categories;
                    if(arr[id-1].title==title&&id-1<=arr.length){
                            result = arr[id-1];
                            flag = true;   
                    }
                     else{
                         flag = false;
                    }
                 err=>{
                     console.log(`connection error:${err}`);
                    }
                 }   
            ); 
            if(flag){
                flag = false;
                return({"Title": result.title,
                        "Visitors":result.visitors,
                        "Expectancy":result.expectancy,
                        "Revenue":result.revenue});
            }
            if(!flag){
                return ({"Error":"Not Found"});
            }
        }
}

           /*     let res = false;
                for(let i in result.Categories){
                    var cat = result.Categories[i];
                    //console.log(cat);
                    //console.log(cat.id);
                    console.log(id);
                if(cat.id==id){
                    res = true;
                    //console.log(cat);
                    return({"Title": cat.title});
                }
                if(!res)
                //console.log(cat);
                console.log("Errror");
                return ({"Error":"Not Found"});  
            }  
        }   
}


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

*/