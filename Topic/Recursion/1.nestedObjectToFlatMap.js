// =>below user object is given and expected output will be given below
// expected o/p=>{
//   user_name: 'John Doe',
//   user_address_personal_street: '123 Main St',
//   user_address_personal_area_city: 'Cityville',
//   user_address_personal_area_zip: '12345',
//   user_address_office_street: '456 Business St',
//   user_address_office_area_city: 'Worktown',
//   user_address_office_area_zip: '67890'
// }


let user = {
    name: "John Doe",
    address: {
      personal: {
        street: "123 Main St",
        area: {
          city: "Cityville",
          zip: "12345"
        }
      },
      office: {
        street: "456 Business St",
        area: {
          city: "Worktown",
          zip: "67890"
        }
      }
    }
  };
  
  
  let finalObj={}
  let solution = (obj,parent)=>{
      for(let key in obj){
          if(typeof obj[key] === 'object'){
              solution(obj[key],parent+"_"+key)
          }else{
              // console.log(obj[key])
              finalObj[parent+"_"+key]=obj[key]
          }
      }
      return finalObj
  }
  
  console.log(solution(user,"user"))